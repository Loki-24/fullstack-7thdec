let emp = {
    id: 101,
    name: "Rahul",
    sal: 45000,
    details: {
        loc: "Wayana",
        color: "red"
    }
}

// read object properties like a variable
let { name, sal } = emp
console.log(name)
console.log(sal)