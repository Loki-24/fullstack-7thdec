class Employee {
    constructor(name) {
        console.log("const executing")
        this.name = name
    }
}
let e1 = new Employee("Rahul")
let e2 = new Employee("Sonia")
let e3 = new Employee("Priyanka")
console.log(e1)
console.log(e2)
console.log(e3)