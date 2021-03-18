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

// immediately invoked function expression or IIFE
(function () {
  const x = 21;
}) (); // Groovy is dog balls

// Handle multiple params by make it as an object or call Name params
function makeLuch(opts) {
  const { main, side, drink } = opts;
  return `Lunch includes ${main}, ${side}, ...`;
}
makeLunch({ main: '🥗', side: '🥩', drink: '🍼' });

// or
function makeDinner(...args) {
  return `Dinner includes the following items: ${args.join(',')}`;
}
makeDinner('🍜🥧', '🥤', '🍷', '🍉', '🥬', '🧄', '🍅');

// Arrow function is alway as expression
const makeWine = (qty) => '🍳'.repeat(qty);

// ES5 Arrow 'this'
function Ball() {
  var self = this;
  this.kick = 'Football ⚽';
  setTimeout(function () {
    console.log(this.kick); // undefined
    console.log(self.kick); // need to use self
  }, 0);
  
  // with Arrow
  setTimeout(() => {
    console.log(this.kick); // work
  }, 0);
}

// Pure Functions

let x = 0;
// ex1
var value = 5;
function impure(arg) {
    return value + 2 + 3;
}
// ex2
// not take x but affect to x
const impure = () => {
  x++;
  return x+1 ** 3;
}


// not affect to x by take x as param
// ex1
function sumOfNumbers(a, b) {
 return a + b;
}
// ex2
const pure = (x) => x ** 2;

const a = impure()
// const a = 0
const b = pure(2)
// const b = 0
console.log(`x=${x}, a=${a}, b=${b}`)


const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const canDrink = ages.filter(age => age >= 21);

// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);



// sort

// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);


// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
