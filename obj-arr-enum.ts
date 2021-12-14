const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //Tuple => exact 2 elements & exact 1- number, 2-string
} = {
  // const person = {
  name: "Jay",
  age: 37,
  hobbies: ["sports", "cooking"],
  role: [2, "author"],
};

let favoriteAct: string[];
// favoriteAct = "aaa";
// favoriteAct = ["running", 11];
favoriteAct = ["running", "11"];
person.role.push("some"); // push is an exception
// person.role[1] = 10;
// person.role = [1, "admin", "some"]; // TUPLE

console.log(`person`, person);
// console.log(person.nickname);
console.log(person.name);

for (const bobbie of person.hobbies) {
  console.log(`ihobbie:`, bobbie.slice(0, 2));
}
