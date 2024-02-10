export const min = (a, b) => (a > b ? b : a);

export const isEven = (val) => {
  if (val === 0) return true;
  else if (val === 1 || val === -1) return false;
  else if (val > 0) return isEven(val - 2);
  else return isEven(val + 2);
};

export const countChar = (string, character) => {
  return string.split("").reduce((acc, val) => {
    if (val === character) return (acc += 1);
    else return acc;
  }, 0);
};

export const countBs = (string) => countChar(string, "B");
