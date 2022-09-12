const { expect } = require('chai');
const sinon = require('sinon');
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

describe("[Service]Testing getAll", function () {
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

describe("[Service] Testing insert", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("With success", async function () {
    const newItem = "Livro Harry Potter e o Prisioneiro de Azkaban";

    sinon.stub(productModel, 'assignProduct').resolves(4)
    
    const result = await productsService.insert(newItem);

    expect(result).to.equal(4);
  })
})
