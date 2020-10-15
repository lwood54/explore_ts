function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Human {
  name = 'Logan';

  constructor() {
    console.log('Creating person object...');
  }
}

const per = new Human();

console.log(per);

