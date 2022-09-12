const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/connection');
const { productModel } = require('../../../src/models'); //MODELS FUNCTIONS
const { productsService } = require('../../../src/services');

const { allProducts } = require('./mocks/products.services.mock') //MOCK

describe("Type of service layer functions returns", function () {
  after(async function () {
    sinon.restore();
  })
  it('Test if getAll and getById returns an array', async function () {
    sinon.stub(productsService, 'getAll').resolves([]);

    const getAllResult = await productsService.getAll();

    expect(getAllResult).to.be.an("array");
  })
})

describe("Testing products service", function () {
  afterEach(async function () {
    sinon.restore();
  });

  it("Testing getAll function", async function () {
    sinon.stub(productModel, "getAllProducts").resolves(allProducts)
    const result = await productsService.getAll();

    expect(result).to.be.equal(allProducts);
  })
  it("Testing getById function being called with id = 1 ", async function () {
    sinon.stub(productModel, "getProductById").resolves([{
      id: 1,
      name: "Martelo de Thor",
    }]);
    const result = await productsService.getById(1)

    expect(result).to.be.deep.equal([{
      id: 1,
      name: "Martelo de Thor",
    }]);
  })

    it("Testing getById being called with an absent item id", async function () {
      const result = await productsService.getById(20);

      expect(result).to.be.deep.equal([])
    })
})
