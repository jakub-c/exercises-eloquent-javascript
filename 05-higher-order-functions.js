export const flatten = (arr) => {
  return arr.reduce((val, acc) => {
    return val.concat(acc);
  });
};

export const loop = (val, testFn, updateFn, bodyFn) => {
  if (testFn(val)) {
    bodyFn(val);
    return loop(updateFn(val), testFn, updateFn, bodyFn);
  }
};

export const every = (arr, test) => {
  return arr.reduce((acc, val) => {
    return test(val) && acc;
  }, true);
};

export function dominantDirection(text) {
  const sortedDirections = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  })
    .filter(({ name }) => name != "none")
    .sort((a, b) => b.count - a.count);

  return sortedDirections[0].name;
}

import { SCRIPTS } from "./05-scripts.js";

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
// console.log(characterScript(121));
// → {name: "Latin", …}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]
