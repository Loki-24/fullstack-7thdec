class Account {
    min_Bal = 500
    acc_Bal = 0
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount) {
        console.log("Amouont Deposited")
    }
}

let a1 = new Account()
console.log(a1)
console.log(a1.min_Bal)
console.log(a1.acc_Bal)

a1.open_Account()
a1.deposit_Amount(5000)