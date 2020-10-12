let userInput: unknown; // type unkown, different than type :any
let userName: string;

userInput = 5;
userInput = "Logan"; 

// userName = userInput; // does not work because TS won't allow unknown to be defined as string

// the following is still better than :any because it allows TS to still help check for
// types, you may have a situation where you really don't know what type is coming in, but
// you can then check for different types conditionally, whereas :any just basically doesn't
// let TS do any helpful checking
if (typeof userInput === 'string') {
  userName = userInput; // DOES work because TS knows you are checking type first
}

// type: never
function generateError(message: string, code: number): never {
  throw { message, errorCode: code}
}

generateError('An error occurred.', 500);