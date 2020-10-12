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
  // can also use 'protected' that will allow classes that inherit this class to still have
  // access to these class properties.
  // If kept on private, only the base class will have access to this property
  private employees: string[] = []; // initialize w/ empty array

  // private, public, readonly are all introduced by TS, not in JS
  constructor(private readonly id: string, public name: string) {

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

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    // use super to pass along value to base class
    super(id, 'IT'); // must call super() first before using this
    this.admins = admins;
  }
}

const accounting = new Department('d1', 'Accounting');
const itDep = new ITDepartment('d2', ['Holly']);

accounting.addEmployee('Logan');
accounting.addEmployee('Tiffany');

itDep.addEmployee('Amrynn');
itDep.addEmployee('Eisley');

console.log('accounting: ', accounting);
console.log('IT Dept: ', itDep);

accounting.describe();
accounting.printEmployeeInfo();

itDep.describe();
itDep.printEmployeeInfo();

// const accountingCopy = { name: 'Logan', describe: accounting.describe};
// accountingCopy.describe();