const ProductManager = require('./ProductManager')

const products = [
    { title: 'teclado', description: 'teclado mecanico', price: 50, image: 'teclado.png', id: 1, stock: 4 },
    { title: 'telefono', description: 'telefono samsung', price: 100, image: 'telefono.png', id: 2, stock: 7 },
]

const manager = new ProductManager(products)

const p1 = {
    title: 'auriculares', 
    description: 'auriculares sony',
    price: 500, 
    image: 'auriculares.png', 
    id: 3,
    stock: 100
}

manager.addProduct(p1)

console.log('Todos los productos:', manager.getProduct())
console.log('Producto con ID', manager.getProductById(3))