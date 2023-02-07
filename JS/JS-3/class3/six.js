class Test {
    name = "Rahul"
    get_Data(x) {
        console.log(x)
        console.log(this.name)
        console.log(this.name)
    }

}

let t = new Test(101, "Rahul")
t.get_Data(10000)