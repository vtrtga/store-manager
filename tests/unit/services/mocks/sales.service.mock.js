const allSalesService = [
  {
    saleId: 1,
    date: new Date(),
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: new Date(),
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: new Date(),
    productId: 3,
    quantity: 15
  }
]

const registeredSaleMock = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const newSaleMock = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
]

module.exports = {
  newSaleMock,
  registeredSaleMock,
  allSalesService,
}