let emp = { id: 101, name: 'Rahul', loc: "Wayanad" }
let new_Emp = { ...emp }
let new_Emp_Details = { ...emp, sal: 45000, email: "Rahul@pm.com" }
console.log(emp)
console.log(new_Emp)          //extract and copy
console.log(new_Emp_Details)  //extending 