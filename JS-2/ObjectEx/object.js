let user = {
    user_Name: "Rahul",
    loc: 'Wayanad'
}
let emp = {}
let count = 0

for (x in user) {
    count = count + 1
}
console.log(count)

if (count > 0) {
    console.log("Give Object is not empty")
}
else {
    console.log("Object empty")
}