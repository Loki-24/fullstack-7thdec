class Account {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}
class SA extends Account {
    constructor(id, name, amount) {
        super(id, name);//calling parent class const
        this.amount = amount
    }
}

let s1 = new SA(101, "Rahul", 50000)
console.log(s1)

//how to initialize object values ?
//using constructor
