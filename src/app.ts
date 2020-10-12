type Comb = string | number;
type Numr = number | boolean;

type Univ = Comb & Numr;

// originally written: //
// function addNumbers(a: Comb, b: Comb) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

/// using Function Overload ///
function addNumbers(a: string, b: string): string;
function addNumbers(a: number, b: number): number;
function addNumbers(a: string, b: number): string;
function addNumbers(a: number, b: string): string;
function addNumbers(a: Comb, b: Comb) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// as is, has return value of Comb, meaning it can be a string or number
// this prevents use of things like .split() on the result if it's concatinated string
// const result = addNumbers(1, 5); 
// const result = addNumbers('Logan', 'Wood'); 
// result.split(' '); // can't do this because return value is Comb instead of string

// one option would be to type cast
const result = addNumbers('Logan', 'Wood'); 
result.split(' '); // can't do this because return value is Comb instead of string