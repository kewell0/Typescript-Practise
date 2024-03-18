let myName: string = "Caleb";

// ARRAYS
const fruits: string[] = ["apple", "mango", "pear"];
const numbers = [2, 3, 4, 5, 7, 898, 87];

// numbers.push(0)

// OBJECTS
const person: {
  name: string;
  age: number;
  score: number;
  isLoggedIn: boolean;
} = {
  name: "caleb",
  age: 22,
  score: 100,
  isLoggedIn: false,
};

person.isLoggedIn = true;
// console.log(person);

// FUNCTION
function addNumbers(a: number, b: number) {
  return a + b;
}

const multiply = (a: number, b: number) => {
  return a * b;
};

// TUPLES
// console.log(multiply(3, 3));
