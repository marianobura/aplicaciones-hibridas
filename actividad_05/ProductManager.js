class ProductManager {
   products = [];

   constructor(products) {
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
}

module.exports = ProductManager