const allProducts = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  },
]

const newProduct = {
  id: 4,
  name: "Livro Harry Potter e o Prisioneiro de Azkaban"
}

const updatedProducts = [
  ...allProducts,
  newProduct,
]

module.exports = {
  newProduct,
  updatedProducts,
  allProducts,
}