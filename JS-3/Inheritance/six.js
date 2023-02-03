class Account {
    constructor() {
        console.log("Account class - constructor")
    }
}
class SA extends Account {
    constructor() {
        super()
        console.log("Savings Account - class const")
    }
}
new SA()