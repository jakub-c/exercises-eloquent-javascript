import { bigOak } from "./11-module-big-oak.js";

Promise.resolve(15).then((val) => console.log(val));

new Promise((resolve, reject) => reject(10))
  .then((val) => console.log(val))
  .catch((val) => console.log(`problem with a val ${val}`));

bigOak.readStorage("food caches", (caches) => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, (info) => {
    console.log(info);
  });
});

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
  });
}

// Test code.
Promise_all([]).then((array) => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then((array) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
