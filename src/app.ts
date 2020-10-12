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