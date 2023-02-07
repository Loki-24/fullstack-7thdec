let product = {
    id: 'p101',
    name: "Iphone 5s",
    price: 14000,
    color: ['White', 'Gray', 'Gold']
}
console.log(product.price)  //14000

for (property in product) {
    console.log(product[property])
}