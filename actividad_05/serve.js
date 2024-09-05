const http = require('http');
const ProductManager = require('./ProductManager');

const manager = new ProductManager([
    { id: 1, name: 'Café Expreso', price: 300 },
    { id: 2, name: 'Café Americano', price: 200 },
    { id: 3, name: 'Capuchino', price: 400 }
]);

const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const array = url.split('/');
    const controller = array[1] ? array[1] : null;
    const id = array[2] ? array[2] : null;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Inicio');
    } else if (url === '/products') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const productsList = manager.getProduct()
            .map(product => `ID: ${product.id}, nombre: ${product.name}, precio: ${product.price}`)
            .join('\n');
        res.end(productsList);
    } else if (controller === 'products' && id) {
        const product = manager.getProductById(id);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (typeof product === 'string') {
            res.end(product);
        } else {
            res.end(`ID: ${product.id}, nombre: ${product.name}, Precio: ${product.price}`);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

server.listen(port, () => {
    console.log('Servidor en el puerto', port);
});
