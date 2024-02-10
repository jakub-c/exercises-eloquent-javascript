function Dog(name) {
  let dog = {};
  dog.name = name;
  dog.say = function (text) {
    console.log(`${dog.name} dog says ${text}`);
  };

  return dog;
}

const sparky = Dog("sparky");
sparky.say("woof");

function Dog2(name) {
  this.name = name;
}

console.log(typeof Dog2);
console.log(Dog.name);

Dog2.prototype.say = function (text) {
  console.log(`${this.name} says ${text}`);
};

const rex = new Dog2("rex");
rex.say("hello");

function Dog22(name) {
  this.name = name;
  this.say = function (text) {
    console.log(`${this.name} ${text}`);
  };
}

const testDog = new Dog22("testDog");
testDog.say("abcdefg");

const testDog2 = new Dog22("testDog2");
testDog2.say("!!!!");

class Dog3 {
  constructor(name) {
    this.name = name;
  }

  say(text) {
    console.log(`${this.name} says ${text}`);
  }
}

Dog3.prototype.size = "small";

const dogbeerd = new Dog3("dogbeerd");
dogbeerd.say("timberly shimbers");
console.log(dogbeerd.size);

const spike = new Dog3("spike");
spike.size = "large";
console.log(spike.size);
