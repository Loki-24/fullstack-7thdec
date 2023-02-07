const Account = require('./Account')

class SA extends Account {
    constructor() {
        console.log("SA Const")
    }
}

new SA()