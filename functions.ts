
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

  function addAndHandle(n1:number, n2:number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }

  printResult(add(5, 12));

  // let combineValues: Function; // non-specific function type
  let combineValues: (a: number, b: number) => number; // return type is a function that takes 2 params of type number and returns number


  combineValues = add;
  // combineValues = printResult;
  // combineValues = 5;

  console.log(combineValues(8, 8));

  addAndHandle(56, 75, (result) => {
    console.log(result);
  })
