import { range } from "./utils.js";

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);
// console.log(roadGraph);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }

  static random(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
  }
}

// let first = new VillageState("Post Office", [
//   { place: "Post Office", address: "Alice's House" },
// ]);
// let next = first.move("Alice's House");

// console.log(next.place);
// // → Alice's House
// console.log(next.parcels);
// // → []
// console.log(first.place);
// // → Post Office

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
  { place: "Town Hall", address: "Farm" },
]);
let next = first.move("Alice's House");

// console.log(first.parcels);
// console.log(next.parcels);

let nextnext = next.move("Bob's House");
// console.log(nextnext.parcels);

let n3 = nextnext.move("Town Hall");
// console.log(n3.parcels);

let n4 = n3.move("Shop");
// console.log(n4.parcels);

let n5 = n4.move("Marketplace");
// console.log(n5.parcels);

let n6 = n5.move("Farm");
// console.log(n6.parcels);

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      // console.log(`Done in ${turn} turns`);
      return turn;
      // break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    // console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

// VillageState.random();
// runRobot(VillageState.random(), randomRobot);

//

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

// runRobot(VillageState.random(), routeRobot, []);

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

// runRobot(VillageState.random(), goalOrientedRobot, []);

function compareRobots(robot1, memory1, robot2, memory2) {
  // Your code here
  return range(0, 101).reduce(
    (acc) => {
      const randomState = VillageState.random();
      const robot1Result = runRobot(randomState, robot1, []) + acc[0];
      const robot2Result = runRobot(randomState, robot2, []) + acc[1];
      return [robot1Result, robot2Result];
    },
    [0, 0]
  );

  // console.log(runRobot(c, robot1, []));
  // console.log(runRobot(c, robot2, []));
  // runRobot(VillageState.random, robot1, memory1);
}

// console.log(compareRobots(routeRobot, [], goalOrientedRobot, []));

class PGroup {
  constructor(arr) {
    if (typeof arr === "undefined") {
      this.group = [];
    } else {
      this.group = arr;
    }
  }

  static get empty() {
    return new PGroup();
  }

  add(val) {
    return new PGroup([...this.group, val]);
  }

  delete(val) {
    const deleted = this.group.filter((el) => el !== val);
    return new PGroup(deleted);
  }

  has(val) {
    const groupHasValue = this.group.indexOf(val);
    return groupHasValue === -1 ? false : true;
  }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
