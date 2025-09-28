// Function to update output areas
function updateOutput(id, text) {
  document.getElementById(id).textContent = text;
}

// Example 1: let and const
function runExample1() {
  let name = "Alex";
  const age = 25;
  // age = 30; // This would cause an error
  updateOutput("output1", `Name: ${name}, Age: ${age}`);
}

// Example 2: Arrow Functions
function runExample2() {
  const greet = (name) => `Hello, ${name}`;
  updateOutput("output2", greet("Alex"));
}

// Example 3: Template Literals
function runExample3() {
  const name = "Alex";
  const age = 25;
  const msg = `Hi ${name}, you are ${age} years old.`;
  updateOutput("output3", msg);
}

// Example 4: Default Parameters
function runExample4() {
  function welcome(user = "Guest") {
    return `Welcome, ${user}`;
  }
  updateOutput("output4", `${welcome()}\n${welcome("Alex")}`);
}

// Example 5: Destructuring
function runExample5() {
  const user = { name: "Alex", age: 25 };
  const { name: username, age: userAge } = user;

  const arr = [10, 20, 30];
  const [first, , third] = arr;

  updateOutput(
    "output5",
    `User: ${username}, ${userAge}\nArray: ${first}, ${third}`
  );
}

// Example 6: Spread and Rest
function runExample6() {
  const nums1 = [1, 2];
  const nums2 = [...nums1, 3, 4];

  function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
  }

  updateOutput("output6", `Spread: [${nums2}]\nRest: ${sum(1, 2, 3, 4)}`);
}
// Example 7: Object Literal Enhancements
function runExample7() {
  const name = "Alex";
  const job = "Developer";
  const person = {
    name,
    job,
    sayHi() {
      return `Hi, I'm ${this.name} and I'm a ${this.job}`;
    },
  };
  updateOutput("output7", person.sayHi());
}

// Example 8: Promises
function runExample8() {
  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"), 1000);
    });

  updateOutput("output8", "Loading...");

  fetchData().then((result) => {
    updateOutput("output8", result);
  });
}

// Example 9: Async/Await
async function runExample9() {
  updateOutput("output9", "Loading...");

  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"), 1000);
    });

  const result = await fetchData();
  updateOutput("output9", result);
}

// Example 10: Classes
function runExample10() {
  class Animal {
    constructor(type) {
      this.type = type;
    }
    speak() {
      return `I am a ${this.type}`;
    }
  }

  const dog = new Animal("Dog");
  updateOutput("output10", dog.speak());
}

// Example 12: Optional Chaining
function runExample12() {
  const profile = { user: { name: "Alex" } };
  updateOutput(
    "output12",
    `User name: ${profile.user?.name}\nContact email: ${profile.contact?.email}`
  );
}
