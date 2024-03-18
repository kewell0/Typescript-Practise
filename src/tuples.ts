const person1: [string, number, boolean] = ["Amina", 20, true];
console.log(person1[1]);

let hsla: [number, string, string, number];
hsla = [20, "80%", "80%", 30];

const useCords = (): [number, number] => {
  const lat = 100;
  const long = 20;

  return [lat, long];
};

console.log(useCords());

// NAMED TUPLE

let user: [name: string, age: number];

user = ["Joy", 24];
console.log(user);
