type Combinable = number | string; // creating a type alias
type ConvDescript = 'as-number' | 'as-text';

function combine(
  // input1: number | string,
  // input2: number | string,
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConvDescript
  ) {
  let result;
  if (typeof input1 === 'number'
    && typeof input2 === 'number'
    || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 38, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '38', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Logan', 'Tiffany', 'as-text');
console.log(combinedNames);