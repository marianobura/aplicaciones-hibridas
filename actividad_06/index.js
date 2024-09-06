const ProductManager = require('./ProductManager');
const manager = new ProductManager()
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Inicio');
    console.log('El usuario accedió a la ruta /');
});

app.get('/api/products', (req, res) => {
    const products = manager.getProducts();
    res.json(products);
    console.log('El usuario accedió a la ruta /api/products');
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = manager.getProductById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'No se encontró el producto con el ID especificado' });
    }
    console.log(`El usuario accedió a la ruta /api/products/${id}`);
})

app.post('/products', (req, res) => {
    const product = req.body;
    console.log('El usuario accedió a la ruta POST: /products')
    console.log(product)
    if (product.name && product.price) {
        res.status(202).json({ mensaje: 'Producto guardado' });
    } else {
        res.status(400).json({ mensaje: 'Producto inválido' });
    }
})


app.listen(port, () => {
    console.log('Servidor en el puerto', port);
});