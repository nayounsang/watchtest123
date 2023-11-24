export const formatHHMM = (hour: number, minute: number) => {
  const h = hour.toString().length === 1 ? `0${hour}` : `${hour}`;
  const m = minute.toString().length === 1 ? `0${minute}` : `${minute}`;
  return `${h}:${m}`;
};
