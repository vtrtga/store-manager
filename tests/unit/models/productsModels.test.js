const { expect } = require('chai');
const { productModel } = require('../../../src/models')
const { allProducts } = require('../services/mocks/products.services.mock')

describe("Testing model layer", function () {
  it("getAllProducts function request", async function () {
    const result = await productModel.getAllProducts();

    expect(result).to.be.deep.equal(allProducts);
  })

  it("getProductsById funciton", async function () {
    const [result] = await productModel.getProductById(1)

    expect(result).to.be.deep.equal(allProducts[0]);
  })
})