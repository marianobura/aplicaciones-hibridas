const fs = require('fs/promises')
const crypto = require('crypto')

class Products {
   path = ''

   constructor(path = 'data/products.json') {
      this.path = path;
   }

   async addProduct(product) {
      const { name, price } = product;
      const id = crypto.randomUUID();

      const data = await fs.readFile(this.path, 'utf-8');
      const array = JSON.parse(data);
      array.push({
         id: id,
         name: name,
         price: price
      })
      const dataProducts = JSON.stringify(array, null, 4);
      await fs.writeFile(this.path, dataProducts, null, 4);
   }

   async getProducts() {
      const data = await fs.readFile(this.path, 'utf-8');
      const array = JSON.parse(data);
      return array;
   }

   async getProductById(id) {
      const data = await fs.readFile(this.path, 'utf-8');
      const array = JSON.parse(data);
      return array.find(product => product.id == id);
   }

   async deleteProductById(id) {
      const data = await fs.readFile(this.path, 'utf-8');
      const array = JSON.parse(data);

      const index = array.find(product => product.id === id);
      array.splice(index, 1);

      const dataProducts = JSON.stringify(array, null, 4);
      await fs.writeFile(this.path, dataProducts, 'utf-8');

      return true;
   }
}

module.exports = { Products }