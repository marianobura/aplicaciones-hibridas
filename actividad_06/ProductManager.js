class ProductManager {
   constructor() {
      this.products = [
         { id: 1, name: 'Café Expreso', price: 300 },
         { id: 2, name: 'Café Americano', price: 200 },
         { id: 3, name: 'Capuchino', price: 400 },
      ];
   }

   addProduct(product) {
      this.products.push(product)
   }
   getProducts() {
      return this.products
   }

   getProductById(id) {
      const product = this.products.find(item => item.id == id)
      return product ? product : 'No se encontró el ID'
   }
}

module.exports = ProductManager