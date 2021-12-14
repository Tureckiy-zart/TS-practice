function add(n1: number, n2: number): number {
  return n1 + n2;
  // return (n1 + n2).toString();
}

// void it means return nothing. we can do not declare void => is it by default
function log(num: number): void {
  console.log(`num`, num);
}

// no error
function log2(num: number): undefined {
  console.log(`num`, num);
  return;
}

log(add(2.11, 32.7));

let some: undefined; //=> undefined is valid value

let combineValues: Function;

combineValues = add;
combineValues = log;

combineValues(2.2, 7); //=> res is 2.2 not 7.2
// combineValues = 88;
// let tsFunction: ()=> number // takes no parameters, returns number
let tsFunction: (a: number, b: number) => number; // takes number as parameter, returns number

tsFunction = add;
// tsFunction = log; // error => just one parameter taken & nothing is return
console.log(tsFunction(7, 3));

//Callbacks

function addAndHandle(num1: number, num2: number, cb: (n: number) => void) {
  const res = num1 + num2;
  cb(res);
}

addAndHandle(10, 20, log);
