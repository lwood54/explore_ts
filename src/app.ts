class Department {
  // long way of initializing and defining class properties
  // private id: string;
  // private name: string;
  // // private is a TS modifier option that prevents the access of this property in the class 'public' is the default
  // private employees: string[] = []; // initialize w/ empty array

  // constructor(id: string, n: string) {
  //   this.id = id;
  //   this.name = n;
  // }

  // abbreviated way of initializing and defining class properties
  private employees: string[] = []; // initialize w/ empty array

  constructor(private id: string, public name: string) {

  }

  describe(this: Department) { // adding this: Department is a TS feature that adds check to make sure method call will look for a property
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Logan');
accounting.addEmployee('Tiffany');

console.log('accounting: ', accounting);

accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: 'Logan', describe: accounting.describe};
// accountingCopy.describe();