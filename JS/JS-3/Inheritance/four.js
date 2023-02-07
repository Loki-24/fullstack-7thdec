class Parent {
    constructor() {
        console.log("Parent Class Const")
    }
}
class Child extends Parent {
    constructor() {
        console.log("Child class - in Constructor")
    }
}

let c1 = new Child();