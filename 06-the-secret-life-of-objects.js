const prod1 = {
  name: "car",
  price: 100,
};

function displayName() {
  return this.name;
}

console.log(displayName.call(prod1));
// "car"

// ------

const obj = { name: "hello" };
obj.say = function () {
  return this.name;
};
// arrow function doesn't bind this to the context
// it is called in, it binds this to the outer scope
obj.jump = () => {
  return this;
};

console.log(obj.say());
console.log(obj.jump()); // that's why this is undefined or Window if it's browser because the most outward this is pointing there
console.log(obj.jump.call(obj)); // that's why this is undefined

// ------

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

protoRabbit.speak("a");

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

// function whatever() {
//   // this.type = "a";
//   return "A";
// }
// function Rabbit(type) {
//   this.type = type;
// }

// console.log(whatever());
// //

class Rabbit2 {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit2 = new Rabbit2("killer").speak("bla");
let blackRabbit2 = new Rabbit2("black");

//
// for now more important than prototypes is:
class Rabbit3 {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit3 = new Rabbit3("killer");
let blackRabbit3 = new Rabbit3("black");

// proto version
let protoDog = {
  bark(msg) {
    console.log(`woof ${msg}`);
  },
};

function makeDog(name) {
  let dog = Object.create(protoDog);
  dog.name = name;

  return dog;
}

const d1 = makeDog("d1");
d1.bark("hello");

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function (msg) {
  console.log(`woof ${msg}`);
};

const d2 = new Dog("d2");
d2.bark("hello2");

// Your code here.

export class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    const sumX = this.x + vec.x;
    const sumY = this.y + vec.y;
    return new Vec(sumX, sumY);
  }

  minus(vec) {
    const diffX = this.x - vec.x;
    const diffY = this.y - vec.y;
    return new Vec(diffX, diffY);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

const v = new Vec(1, 2);

console.log(v.x);
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// // → 5

export class Group {
  constructor() {
    this.group = [];
  }

  add(val) {
    if (this.group.indexOf(val) === -1) {
      return this.group.push(val);
    } else {
      return this.group;
    }
  }

  delete(val) {
    return (this.group = this.group.filter((el) => el !== val));
  }

  has(val) {
    if (this.group.indexOf(val) === -1) {
      return false;
    } else {
      return true;
    }
  }

  static from(obj) {
    const group = new Group();
    for (const el of obj) {
      group.add(el);
    }
    return group;
  }

  [Symbol.iterator]() {
    const iteratorGroup = [...this.group]; // clone array
    return {
      next: () => {
        if (iteratorGroup.length === 0) {
          return { done: true };
        } else {
          const firstEl = iteratorGroup.shift();
          return {
            value: firstEl,
            done: false,
          };
        }
      },
    };
  }
}

// class GroupIterator {
//   constructor(group) {
//     this.group = group;
//   }

//   next() {
//     if (this.group.length === 0) {
//       return { done: true };
//     } else {
//       const firstEl = this.group.shift();
//       return { value: firstEl, done: false };
//     }
//   }
// }

// Group.prototype[Symbol.iterator] = function () {
//   return new GroupIterator(this);
// };

const g = Group.from([10, 20, 30]);
// let okIterator = g[Symbol.iterator]();
// console.log(okIterator.next());
for (const el of g) {
  console.log("val", el);
}

console.log(g);

let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
// console.log(map.hasOwnProperty("one"));

Object.hasOwnProperty.call(map, "hasOwnProperty");
// → true
