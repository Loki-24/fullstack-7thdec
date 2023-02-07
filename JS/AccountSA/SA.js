//ES6
//import Account from './Account'
//ES5
const Account = require('./Account')
class SA extends Account {
    constructor(id, name, amount) {
        super(id, name);
        this.acc_Amount = amount
    }
    deposit_Amount(da) {
        this.acc_Amount = this.acc_Amount + da
    }
}
let a1 = new SA(101, "Rahul", 5000)
a1.open_Account()
console.log(a1)

a1.deposit_Amount(1000000)
console.log(a1)