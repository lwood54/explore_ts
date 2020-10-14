/// EXample of Generics ///
// const names: Array<string> = []; // same as string[]

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(54);
//   }, 2000);
// });


/// build our own generics ///
// on first use, it looks like we are using variables to represent a connection to
// the type that will be passed as an argument to this function.
// this works, however now T & U could be any time, so we need to use 'constraints' to correct this
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// in using extends object, we are adding constraints and informing TS that
// the generic variables will at least be an object, but will be structured
// differently from each other
function mergeObjects<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//// NOTE: you have a lot of flexibility with constraints, you can use any type,
//// including a custom type, or even union types.
//// You can also only constrain one generic, and nother the other if desired


const mergedObjs = merge({name: 'Logan'}, {age: 38});
console.log(mergedObjs);


// another generic
interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Have no value.';
  if (element.length === 1) {
    descriptionText = 'Have 1 element.';
  } else if (element.length > 1) {
    descriptionText = `Have ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['programming', 'woodworking']));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(54)); // won't work because number has no length

// more constraints
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Logan'}, 'name');

// generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10); // won't work because string was identified as type
textStorage.addItem('input scores');
textStorage.addItem('eat lunch');
console.log('before remove: ', textStorage.getItems());
textStorage.removeItem('eat lunch');
console.log('after remove: ', textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Logan'});
// objStorage.addItem({name: 'Tiffany'});
// objStorage.removeItem({name: 'Tiffany'});
// console.log(objStorage.getItems());

// partial types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // basically setting the types to optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // had to typecast here away from Partial to CourseGoal because we now know that courseGoal will fulfill requirements
};

//// readonly types
const names: Readonly<string[]> = ['Logan', 'Tiffany'];
// names.push('Amrynn'); // now with Readonly, you can't add to the array
// names.push('Eisley');
