const express = require('express');
const { Products } = require('./Products');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Inicio');
    console.log('El usuario accedió a la ruta /');
});

app.get('/api/products', async (req, res) => {
    const products = new Products();
    const data = await products.getProducts();
    res.status(200).send(data);
    console.log('El usuario accedió a la ruta /api/products');
})

app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const products = new Products();
    const data = await products.getProductById(id);
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ message: 'No se encontró el producto con el ID especificado' });
    }
    console.log(`El usuario accedió a la ruta /api/products/${id}`);
})

app.post('/api/products', async (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) {
        res.status(400).json({ message: 'Faltan parámetros' })
    }
    const products = new Products();
    await products.addProduct({
        name,
        price
    })
    res.status(202).json({ message: 'Producto guardado' })
    console.log('El usuario accedió a la ruta POST: /api/products')
})

app.delete('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const products = new Products();

    const product = await products.deleteProductById(id);
    if (product) {
        res.status(200).json({ message: 'Producto eliminado' });
    } else {
        res.status(404).json({ message: 'No se pudo eliminar el producto con ese ID' })
    }
    console.log('El usuario accedió a la ruta DELETE: /api/products/id')
})

app.listen(port, () => {
    console.log('Servidor en el puerto', port);
});