function wordCount(msg) {
    var new_Msg = msg.toUpperCase();
    return new_Msg.split(' ').length;
}
 let message = `Hello Good Morning
 welcome to` 

// let message = `Hello Good Morning`

let n = wordCount(message)

console.log(n)

console.log(String.fromCharCode(n + 65))