// ===== 1. let and const =====
let name = "Alex";
const age = 25;
// age = 30; // ❌ Error: const can't be reassigned

// ===== 2. Arrow Functions =====
const greet = name => `Hello, ${name}`;
console.log(greet("Alex"));

// ===== 3. Template Literals =====
const msg = `Hi ${name}, you are ${age} years old.`;
console.log(msg);

// ===== 4. Default Parameters =====
function welcome(user = "Guest") {
  console.log(`Welcome, ${user}`);
}
welcome(); // Welcome, Guest

// ===== 5. Destructuring =====
const user = { name: "Alex", age: 25 };
const { name: username, age: userAge } = user;
console.log(username, userAge);

const arr = [10, 20, 30];
const [first, , third] = arr;
console.log(first, third);

// ===== 6. Spread and Rest =====
const nums1 = [1, 2];
const nums2 = [...nums1, 3, 4];
console.log(nums2); // [1, 2, 3, 4]

function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4));

// ===== 7. Object Literal Enhancements =====
const job = "Developer";
const person = {
  name,
  job,
  sayHi() {
    return `Hi, I'm ${this.name} and I'm a ${this.job}`;
  }
};
console.log(person.sayHi());

// ===== 8. Promises =====
const fetchData = () => new Promise((resolve) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});
fetchData().then(console.log);

// ===== 9. Async/Await =====
async function asyncExample() {
  const result = await fetchData();
  console.log(result);
}
asyncExample();

// ===== 10. Classes =====
class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    return `I am a ${this.type}`;
  }
}
const dog = new Animal("Dog");
console.log(dog.speak());

// ===== 11. Modules (see separate files for actual use) =====
// export const add = (a, b) => a + b;
// import { add } from './math.js';

// ===== 12. Optional Chaining =====
const profile = { user: { name: "Alex" } };
console.log(profile.user?.name); // Alex
console.log(profile.contact?.email); // undefined

// ===== 13. Nullish Coalescing =====
let usernameInput = null;
console.log(usernameInput ?? "DefaultUser");

// ===== 14. for...of Loop =====
const scores = [90, 80, 100];
for (let score of scores) {
  console.log(score);
}

// ===== 15. Map and Set =====
const map = new Map();
map.set("a", 1);
console.log(map.get("a"));

const set = new Set([1, 2, 2, 3]);
console.log([...set]); // [1, 2, 3]

// ===== 16. Array Methods =====
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].find(n => n > 1));
console.log([1, 2, 3].findIndex(n => n === 2));

// ===== 17. Object.entries/values/fromEntries =====
const info = { a: 1, b: 2 };
console.log(Object.entries(info));
console.log(Object.values(info));
console.log(Object.fromEntries([["x", 10], ["y", 20]]));

// ===== 18. Logical Assignment Operators =====
let userName = null;
userName ||= "Guest";
console.log(userName); // Guest

// ===== 19. Private Class Fields =====
class Secret {
  #code = 123;
  getCode() {
    return this.#code;
  }
}
const s = new Secret();
console.log(s.getCode()); // 123

// ===== 20. Top-level Await (modules only) =====
// const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// const data = await response.json();
// console.log(data); // Needs module environment
