let state = {
    product: {
        name: 'Iphone',
        price: 45000,
        qty: 1,
        usage: "Handle with Care"
    },
    order: "Order Not Delivered",
    availability: true
}
console.log(state.product.name)
//destructure object
let { product, order } = state
console.log(product.price)
console.log(order)