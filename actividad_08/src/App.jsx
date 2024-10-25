function App() {
  const parraph = "Mariano Buranits | Aplicaciones Híbridas | DWM4AP"
  
  const products = [
    { id: 1, title: "Essence Mascara Lash Princess", price: 9.99, thumbnail: "/essence-mascara-lash-princess.png" },
    { id: 2, title: "Eyeshadow Palette with Mirror", price: 19.99, thumbnail: "/eyeshadow-palette-with-mirror.png" },
    { id: 3, title: "Powder Canister", price: 14.99, thumbnail: "/powder_canister.png" },
    { id: 4, title: "Red Lipstick", price: 12.99, thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png" },
    { id: 5, title: "Red Nail Polish", price: 8.99, thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png" },
    { id: 6, title: "Calvin Klein CK One", price: 49.99, thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png" },
    { id: 7, title: "Chanel Coco Noir Eau De", price: 129.99, thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png" },
    { id: 8, title: "Dior J'adore", price: 89.99, thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png" },
    { id: 9, title: "Dolce Shine Eau de", price: 69.99, thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png" },
    { id: 10, title: "Gucci Bloom Eau de", price: 79.99, thumbnail: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png" }
  ]

  return (
    <>
      <div className="flex flex-col gap-2 bg-green-800 items-center justify-center">
        <h1 className="text-white font-semibold text-3xl">Actividad 08 - Página Web con React</h1>
        <p className="text-neutral-200 text-xl">{ parraph }</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 my-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 m-2 rounded-lg shadow-md group">
            <div className="overflow-hidden">
              <img src={product.thumbnail} alt={product.title} className="w-full h-72 object-contain mb-4 group-hover:scale-125 transition-all" />
            </div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-neutral-700">${product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App