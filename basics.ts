function add(
  n1: number,
  n2: number,
  canPrint: boolean = false,
  printPhrase: string = ""
) {
  if (!canPrint) return n1 + n2;
  if (printPhrase) console.log(printPhrase, n1 + n2);
  console.log(n1 + n2);
  return;
}
const num1 = 5;
let num2: number; //if need => good practice
num2 = 22.3;

const num3: number = 22.3; // bad practice

const printResult = true;
add(num1, num2, printResult, "Result is: ");
// add(+"5", 21.5, printResult);

