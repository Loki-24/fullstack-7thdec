class Account {
    min_Bal = 500
    acc_Bal = 0
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount) {
        //console.log("Amount Deposited:", amount)
        this.acc_Bal = this.acc_Bal + amount
    }
}

let a1 = new Account()
let a2 = new Account()

console.log(a1)
console.log(a2)
a1.deposit_Amount(5000)
a2.deposit_Amount(10000)

console.log(a1)
console.log(a2)