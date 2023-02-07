const Account = require('./Account')

class SA extends Account {
    constructor() {
        super()
        console.log("SA Const")
    }
}

new SA()