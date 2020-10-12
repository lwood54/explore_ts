// interface is a TS key word
interface Named {
  readonly name: string;
}

interface Greetable extends Named{ // you can extend an interface to another interface
  greet(phrase: string): void;
}

// you can use an interface to create a 'contract' for what a class should contain or how it should be structured
// you can implement multiple interfaces by using a ',' (unlike how you can only inherit one base class in another class)
// this almost feels like a required todo list each time you create a class that will implement a given interface
// class Person implements Greetable, Named { // you can either add extra interfaces like this OR
class Person implements Greetable { // you can extend one interface from another, see above
  name: string;
  age: number = 38;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }

}

let user1: Greetable; // because I'm specifying this type interface, which does not have age, age cannot be called on
// let user1; // I could either create another interface or do inferred type: any (which is never ideal)

user1 = new Person('Logan');

user1.greet('Hi there, I am ');
//console.log('I am ', user1.age); // cannot access age if the interface structure does not define it even if it is present on the class/object
console.log('user1 object: ', user1);