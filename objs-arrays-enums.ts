// **Another way of setting object type** //
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Logan',
//   age: 38
// }

// ** allowing TS to infer object type //
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tubpel, setting types inside specified length array
// } = {
//   name: 'Logan',
//   age: 38,
//   hobbies: ['Programming, Woodworking'], // ts infers type as array of strings
//   role: [2, 'author']
// }

// enum OPTION 1 - auto assigned 0,1,2, etc.
enum Role { ADMIN, READ_ONLY, AUTHOR}; // associates variable with 0, 1, 2, etc.


// enum OPTION 2 - auto assigned based on first defenition
enum Role2 { ADMIN = 54, READ_ONLY, AUTHOR}; // starts at 54, 55, 56, etc.

// enum OPTION 3 - assign each value
enum Role3 { ADMIN = 5, READ_ONLY = 54, AUTHOR = 18}

// enumm OPTION 4 - can even assign strings instead of numbers if wanted


const person = {
  name: 'Logan',
  age: 38,
  hobbies: ['Programming, Woodworking'], // ts infers type as array of strings
  role: Role3.AUTHOR
}

if (person.role === Role3.AUTHOR) {
  console.log('you are an author');
}

// let favoriteActivities: string[]; // setting type explicitly to array of strings

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }