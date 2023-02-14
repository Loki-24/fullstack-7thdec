//merging object using spread operator

let emp = { id: 101, name: "Rahul", loc: "Wayanad" }
let details = { loc: "new_Delhi", name: "Rahul Gandhi" }

let emp_Details = { ...emp, ...details }
console.log(emp_Details)