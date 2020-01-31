export const capitalizeString = (word) => {
  const strMap = word
    .split("")
    .map((element, i) => {
      if (i === 0) {
        return element.toUpperCase();
      }
      if (word[i - 1] === " ") {
        return element.toUpperCase();
      }
      return element;
    })
    .join("");

  return strMap;
};