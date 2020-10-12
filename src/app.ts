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

