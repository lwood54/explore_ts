// intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// this is an intersection type, but you could also do this by creating multiple interfaces, then extending
type ElevatedEmployee = Admin & Employee; // object type that combines the two custom types

const e1: ElevatedEmployee = {
  name: 'Logan',
  privileges: ['create-server'],
  startDate: new Date()
}

// intersection types are also possible in other ways:
type Pickable = string | number; // union type
type Numeric = number | boolean;
type Universal = Pickable & Numeric;

function addNums(a: Pickable, b: Pickable) {
  // this check is a type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  // another type guard
  // if (emp.privileges) { // does not work, TS won't allow access
  if ('privileges' in emp) { // this method allows JS to check if this property is on the emp object
    console.log('Privileges: ', emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ', emp.startDate);
  }
}

printEmployeeInfo(e1);

// provide info with missing privileges:
printEmployeeInfo({name: 'Tiffany', startDate: new Date()});

/////// using 'instance of' type guard ////////
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

//// previous way to check ////
// untion type
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000);
  // }

  // instead, use instance of  **NOTE: you could not use this technique with interfaces because interfaces
  // do not compile to JS, where as the code below is JS
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(2000);
  }
}

useVehicle(v1);
useVehicle(v2);

// DISCRIMINATED unions  | one common property in which you can 'discriminate' between interfaces
interface Bird {
  type: 'bird'; // type of specific type 'bird' -> literal type
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // using literal type to differentiate later
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // one option we've learned earlier
  // if ('flyingSpeed' in animal) {
  //   console.log('Moving with speed: ' + animal.flyingSpeed);
  // }
  let speed: number;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
      
      case 'horse':
        speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 15});

///// type casting /////
// need to typecase because we can't change value on a generic 'HTMLElement'
// 2 options for typcasting here.
    // OPTION 1
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

  // OPTION 2
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// OPTION 3 (if you want to use an if check instead of !, which guarantees there will not be null)
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  // you need to typecast afer the check
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}




