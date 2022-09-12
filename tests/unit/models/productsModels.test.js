const { expect } = require('chai');
const { productModel } = require('../../../src/models')
const sinon = require('sinon');
const { allProducts } = require('../services/mocks/products.services.mock');
const connection = require('../../../src/connection');
const { newProduct } = require('../controllers/mocks/products.controller.mock');

describe("Testing model layer", function () {
  afterEach(function () {
    sinon.restore()
  })
  it("getAllProducts function request", async function () {
    const result = await productModel.getAllProducts();

    expect(result).to.be.deep.equal(allProducts);
  })

  it("getProductsById function", async function () {
    const [result] = await productModel.getProductById(1)

    expect(result).to.be.deep.equal(allProducts[0]);
  })
})

describe("Testing model insertProducts", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("Car assigned with success", async function () {
    const newItem = 'Livro Harry Potter e o Prisioneiro de Azkaban';

    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    
    const result = await productModel.assignProduct(newItem);

    expect(result).to.equal(4);
  })
})