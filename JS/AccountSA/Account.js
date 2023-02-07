class Account {
    constructor(id, name) {
        this.acc_Id = id;
        this.acc_Name = name;
    }
    open_Account() {
        console.log("Account opened Succesfully")
    }
}
//ES6
//export default Account

//ES5
module.exports = Account