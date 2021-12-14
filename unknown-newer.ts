let userInput: unknown;
let nameInput: string;

userInput = 55;
userInput = "Jay";

// nameInput = userInput; //=> error Ts do not know what type is variable at the moment

if (userInput === "string") {
  nameInput = userInput; // no error because of checking
}

// Never

function generateError(message: string, code: number): never {
  throw { message: message, code: code };
}

generateError("An error occurred!", 500);
