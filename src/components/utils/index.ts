export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const addZero = (val: number | string) => {
  if ((typeof val === "number" || !isNaN(+val)) && +val > 1) {
    if (+val < 10) {
      return `0${val}`;
    }
  }
  return val;
};
