const { expect } = require('chai');
const sinon = require('sinon');
const { salesController } = require('../../../src/controllers')

describe("[Controller]Testing getAll sales", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("Testing getAll function return status", async function () {
    req = {}
    res = {}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesController.getAll(req, res)

    expect(res.status.calledWith(200)).to.be.equal(true);
  })
})

describe("[Controller]Testing function that registers a sale", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("Testing if the function is called", async function () {
    res = {}
    req.body = [
      {
        "productId": 1,
        "quantity": 10
      },
      {
        "productId": 2,
        "quantity": 50
      }
    ];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();


    await salesController.saleAssign(req, res)

    expect(res.status.calledWith(201)).to.be.equal(true);

  })
})