class Account {
    account_Bal = 0
    open_Account() {
        console.log("Account Opened Succesffullly")
    }
}
class SA extends Account {
    min_Bal = 500
}
let s1 = new SA();
class CA extends Account {
    min_Bal = 5000
}
let c1 = new CA()
console.log(s1)
console.log(c1)
/* s1.open_Account()
c1.open_Account() */