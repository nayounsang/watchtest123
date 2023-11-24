const getRad = (minute: number): number => {
  return (Math.PI / 180) * Math.floor((minute % 720) / 4);
};

const getLine = (
  minute: number,
  width: number,
  height: number
): [number, number] => {
  const rad = getRad(minute);
  const slope = Math.tan(rad);
  return [slope, height - (slope * width) / 2];
};

const getCaseAndPX = (
  minute: number,
  width: number,
  height: number
): [number, number] => {
  if (180 - Math.floor((minute % 720) / 4) === 90) {
    return [1, width / 2];
  }
  
  // 선분은 (0,height) - (0,0), (0,0) - (width,0), (width,0) - (width,height)
  // 기준점은 (width/2,height)
  // 따라서 y = m(x-width/2) + height일때 어느 선분과 교차하는지 구함

  const [slope, interceptY] = getLine(minute, width, height);
  if (interceptY <= height && interceptY >= 0) {
    return [0, interceptY];
  } else if (
    slope * width + interceptY <= height &&
    slope * width + interceptY >= 0
  ) {
    return [2, slope * width + interceptY];
  } else {
    return [1, -interceptY / slope];
  }
};

const getPolygon = (minute: number, width: number, height: number): string => {
  const [c, p] = getCaseAndPX(minute, width, height);
  if (c === 0) {
    return `polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 ${p}px)`;
  } else if (c === 1) {
    return `polygon(0 0, 100% 0, 100% 100%, 50% 100%, ${p}px 0)`;
  } else {
    return `polygon(100% 0, 100% 0, 100% 100%, 50% 100%, 100% ${p}px)`;
  }
};

export default getPolygon;