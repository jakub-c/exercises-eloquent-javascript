// Number -> Number -> Array

export const range = (from, to) => {
  const length = to - from;
  return Array.from({ length }).map((_, index) => {
    return index + from;
  });
};

// alternatively Array.from has a callback
// export const range = (from, to) => {
//   const length = to - from;
//   return Array.from(Array(length).keys(), (index) => {
//     return index + from;
//   });
// };
