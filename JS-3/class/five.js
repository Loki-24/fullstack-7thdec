class Account {
    min_Bal = 500
    open_Account() {
        console.log("Accouted was opened");
    }
    close_Account() {
        console.log("Closed")
    }
}
let a1 = new Account()
console.log(a1.min_Bal)
a1.open_Account()
a1.close_Account()