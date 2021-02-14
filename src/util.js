export const getRandomItem = (items) => items[Math.round(Math.floor(Math.random() * items.length))];
export const getRandomNumbers = (min, max) => Math.round(Math.random() * (max - min) + min);
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
export const getBoolian = () => Boolean(getRandomInteger(0, 1));
