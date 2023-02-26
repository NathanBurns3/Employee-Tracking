class Employee {
    constructor(firstname, lastname, yearsWorked) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.yearsWorked = yearsWorked;
    }
}

Employee.prototype.list = function() {
    console.log(this.firstname + " " + this.lastname + " has worked for " + this.yearsWorked + " years.");
};

let e1 = new Employee("Nathan", "Burns", 5);
let e2 = new Employee("Jack", "Smith", 3);

let employees = [];
employees.push(e1, e2);

for (e in employees) {
    employees[e].list();
}