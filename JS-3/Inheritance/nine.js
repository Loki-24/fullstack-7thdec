class Account {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}
class CA extends Account {
    constructor(id, name, amount, type) {
        super(id, name)
        this.amount = amount
        this.type = type
    }
}

let c1 = new CA(501, "Rahul Gandhi", 55000, "current");
console.log(c1)

class SA extends Account {
    constructor(id, name, amount) {
        super(id, name);//calling parent class const
        this.amount = amount
    }
}
