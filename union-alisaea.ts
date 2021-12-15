type Combinable = number | string;
type ConventionDescriptor = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConvention: ConventionDescriptor
) {
  let res;

  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConvention === Convention.number
  ) {
    res = +input1 + +input2;
  } else if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConvention === Convention.text
  ) {
    res = (input1 + input2).toString();
  } else {
    res = input1.toString() + input2.toString();
  }
  console.log("res :>> ", res);
  return res;
}
enum Convention {
  number = "as-number",
  text = "as-text",
}

// const combineNum = combine(32, 18);
const combineNumToStr = combine(4, 2, Convention.text);

const combineStr = combine("Anna", " is not a dog", Convention.text);

type User = { name: string; age: number };

const user1: { name: string; age: number } = {
  name: "Max",
  age: 32,
};
// => the same
const user2: User = { name: "Pain", age: 11 };

function greet(user: User) {
  console.log(`hello ` + user.name);
}

greet({ name: "Jay" }); //=> not correct
greet({ name: "Jay", age: 55 });
greet(user2);

