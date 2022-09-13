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

describe("[Service]Testing function that assign a date for a sale", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("Testing if the function is called", async function () {

    req = {
      body: {
        saleId: 2,
        date: new Date(),
      }
    };
    res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await salesController.saleAssign(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
  })
})