// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log("1------------------------------------------");
// Object creation
const obj = {
  burger: "🍔",
  size: 12
};

// set property to object created
obj["whoami"] = "🤷‍♀️";

// read or get property
console.log(obj["burger"]);

const organism = {
  dna: Math.random()
};

// create obj1 using organism as prototype
const obj1 = Object.create(organism);

console.log(obj1);
console.log(obj1.dna);
console.log(Object.getPrototypeOf(obj1));

const obj2 = Object.create({});

// Object.defineProperty(obj2, "beer", {value: '🍺'})

// advance
Object.defineProperty(obj2, "beer", { get: () => "🍺", enumerable: false });

console.log(obj2.beer);

console.log("2------------------------------------------");
// Property descriptors
const ufo = "🛸";
const owner = "alien";
const random = () =>
  Math.random()
    .toString(36)
    .slice(-5);
// global
const web = "🐱‍🚀";

// shorthand syntax
const obj3 = {
  ufo,
  owner,
  // can override
  ctr: 32,
  ctr: 12,
  // compute property
  [random()]: true,
  web: "",
  // function in(live on) a object is aka(call) method
  makeWeb() {
    this.web += "❄❄❄";
    return this;
  }
};

const { ufo: alienShip, owner: rider } = obj3; // destructuring

console.log(alienShip, rider, obj3.ctr, obj3);
// prototype chain
obj3
  .makeWeb()
  .makeWeb()
  .makeWeb();
console.log(obj3.web);
console.log(obj3.makeWeb().ctr);

console.log("3------------------------------------------");
// How object references work
// premitive values are stored in the call stack
let a = "🥗";
let b = a;
console.log(a, b);
a = "🥡";
console.log(a, b);

// objects are kept as references in the heap
let c = { boo: "🍚" };
let d = c;

console.log(c, d);
c.boo = "🧊";
// becuz they're both sharing the same ref to it
console.log(c, d);

console.log("4------------------------------------------");
// copy or clone an object without reference to it
let e = { boo: "🍜" };
let f = Object.assign({}, e);
// or using spread operator
let g = { ...e, ...c, something: "else" };

console.log(e, f, g);
console.log(Object.getOwnPropertyNames(e));

e.boo = "🎃";
console.log(e, f, g);

console.log("5------------------------------------------");
// Loop over objects
const h = {
  commet: "🎄",
  trex: "🎪"
};

for (let i in h) {
  console.log(i);
}

for (const k of Object.keys(h)) {
  console.log(k);
}

for (const v of Object.values(h)) {
  console.log(v);
}

for (const [k, v] of Object.entries(h)) {
  console.log(k, v);
}

console.log("6------------------------------------------");
// Custom object constructors
// customize way of creating object
// constructor 👇 function
function Zombie(name) {
  this.name = name;
  this.reanimated = Date.now();

  this.eatBrain = function() {
    return `${this.name} is hungry for 🧠`;
  };
}

const j = new Zombie("😵 Brad");
console.log(j.eatBrain());
