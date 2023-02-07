class Account {
    min_Bal = 500
    open_Account() {
        console.log("Account - opened")
    }
    deposit_Amount() {
        console.log("Amount Deposited")
    }
    withdrawl() {
        console.log("no Money")
    }
    get_St() {
        console.log("Server buzy")
    }
    get_Bal() { }
    close_Account() {
        console.log("Account closed")
    }
}
let a1 = new Account()
a1.open_Account()
a1.deposit_Amount()
a1.get_Bal()
a1.get_St()
a1.close_Account()