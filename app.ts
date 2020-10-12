
// TS will infer function return type
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// you can explicitly define function return type
  function add(n1: number, n2: number): number {
    return n1 + n2;
  }

// TS detects void when no return value (displayed here manually)
  function printResult(num: number): void {
    console.log('Result: ' + num);
  }

// TS requires you to return undefined if you set undefined as return type
  function printResult2(num: number): undefined {
    console.log('Result: ' + num);
    return; // returns undefined
  }

  printResult(add(5, 12));

  let combineValues;

  combineValues = add;

  console.log(combineValues(8, 8));
