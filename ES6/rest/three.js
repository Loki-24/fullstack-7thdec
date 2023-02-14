function add(a, ...b) {
    let total = 0
    for (ele of b) {
        total = total + ele
    }
    console.log(total + a)
}
add(10, 20)

add(10, 20, 30)
add(10, 20, 30, 40)
add(10, 20, 30, 40, 50)
add(10, 20, 30, 40, 50, 50)