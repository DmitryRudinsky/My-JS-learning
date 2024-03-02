"Упражнение 1"

function countSteps(state, robot, memory) {
    for (let steps = 0;; steps++) {
      if (state.parcels.length == 0) return steps;
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  
function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
      let state = VillageState.random();
      total1 += countSteps(state, robot1, memory1);
      total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot 2 needed ${total2 / 100}`)
}
  
compareRobots(routeRobot, [], goalOrientedRobot, []);


"Упражнение 2"

function lazyRobot({place, parcels}, route) {
    if (route.length == 0) {
      // Describe a route for every parcel
      let routes = parcels.map(parcel => {
        if (parcel.place != place) {
          return {route: findRoute(roadGraph, place, parcel.place),
                  pickUp: true};
        } else {
          return {route: findRoute(roadGraph, place, parcel.address),
                  pickUp: false};
        }
      });
      function score({route, pickUp}) {
        return (pickUp ? 0.5 : 0) - route.length;
      }
      route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }
  
    return {direction: route[0], memory: route.slice(1)};
}
  
runRobotAnimation(VillageState.random(), lazyRobot, []);


"Упражнение 3"

class PGroup {
    #members;
    constructor(members) {
      this.#members = members;
    }
  
    add(value) {
      if (this.has(value)) return this;
      return new PGroup(this.#members.concat([value]));
    }
  
    delete(value) {
      if (!this.has(value)) return this;
      return new PGroup(this.#members.filter(m => m !== value));
    }
  
    has(value) {
      return this.#members.includes(value);
    }
  
    static empty = new PGroup([]);
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