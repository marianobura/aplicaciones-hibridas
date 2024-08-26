const fs = require ('fs/promises')

class ProductManager {
   products = [];

   constructor(products = []) {
      this.products = products
   }

   addProduct(product) {
      this.products.push(product)
   }
   getProduct(){
      return this.products
   }

   getProductById(id){
      const product = this.products.find(item => item.id == id)
      return product ? product : 'No se encontró el ID'
   }

   async writeJSON() {
      await fs.writeFile('./data.json', JSON.stringify(this.products, null, 4))
   }

   async readJSON() {
      const data = await fs.readFile('./data.json', 'utf-8')
      this.products = JSON.parse(data)
   }
}

module.exports = ProductManager