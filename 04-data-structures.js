export const rangeInclusive = (start, end, step = 1) => {
  // this is a horrible implementation, I shall find a functional one
  let arr = [];
  if (start > end) {
    for (let i = start; i >= end; i += step) arr.push(i);
  } else {
    for (let i = start; i <= end; i += step) arr.push(i);
  }

  return arr;
  // return Array.from(Array(arrLength).keys(), (index) => {
  //   return index + start;
  // }).filter((val, index) => index % Math.abs(step) === 0);
};

export const sum = (arr) => {
  return arr.reduce((acc, val) => (acc += val), 0);
};

export const reverseArray = (arr) => {
  return arr.reduce((acc, val, index) => {
    acc.push(arr[arr.length - 1 - index]);
    return acc;
  }, []);
};

export const reverseArrayInPlace = (arr) => {
  // this is a horrific mutable arr replacement
  // it's convoluted and impractical
  // yet it just runs thgouth half of the length of an array
  //  - so it's faster than a full iteration over an array
  // more info: https://eloquentjavascript.net/04_data.html#p_hzYSkS4zzl

  const arrHalfLength = Math.floor(arr.length / 2);

  for (let i = 0; i <= arrHalfLength; i++) {
    const copyOfFirstEl = arr[i];
    const elOfOppositePosition = arr[arr.length - 1 - i];

    arr[i] = elOfOppositePosition;
    arr[arr.length - 1 - i] = copyOfFirstEl;
  }
  return arr;
};

export const arrayToList = (arr) => {
  if (arr.length === 0) return null;
  const first = arr.shift();

  return {
    value: first,
    rest: arrayToList(arr),
  };
};

export const listToArray = (list) => {
  if (list.rest === null) return [list.value];
  else return [list.value, ...listToArray(list.rest)];
};

export const prepend = (el, list) => {
  return {
    value: el,
    rest: list,
  };
};

export const nth = (list, position) => {
  if (list === null) return undefined;
  if (position === 0) return list.value;

  return nth(list.rest, position - 1);
};

export const deepEqual = (obj1, obj2) => {
  const objCompare = (obj1, obj2) => {
    const compareValues = (property) => {
      if (typeof obj1[property] === "object") {
        return objCompare(obj1[property], obj2[property]);
      } else {
        return obj1[property] === obj2[property];
      }
    };

    const andMap = (val, acc) => {
      return val && acc;
    };

    return Object.keys(obj1).map(compareValues).reduce(andMap);
  };

  return objCompare(obj1, obj2) && objCompare(obj2, obj1);
};
