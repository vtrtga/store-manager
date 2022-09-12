const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { newProduct, updatedProducts } = require('./mocks/products.controller.mock')
        
const { productController } = require('../../../src/controllers')

describe("[Controller] Testing getAll and getById", function () {
  const res = {};
  const req = {};
  afterEach(sinon.restore);

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  })
  it("getAll function returns an object array with all products", async function () {
    await productController.getAll(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
  })

  it("getById being called with id, should returns an object with the respective product", async function () {
    req.params = { id: 2 }
    await productController.getById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
  })

  it("getById called with an invalid id should returns an error", async function () {
    req.params = { id: 20 }
    await productController.getById(req, res);

    expect(res.status.calledWith(404)).to.be.equal(true);
  })
}) 

describe("[Controller] Testing post method to update products db", function () {
  afterEach(function () {
    sinon.restore()
  });
  beforeEach(function () {
    sinon.stub(productsService, 'insert')
    .resolves(4)
  })
  it("Testing if it's called with status 201", async function () {
    const res = {};

    const req = {
      body: newProduct
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.insert(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
})
})