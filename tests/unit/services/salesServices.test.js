const { expect } = require('chai');
const sinon = require('sinon');

const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models')

const { allSalesService } = require('./mocks/sales.service.mock')
const { allSalesModel } = require('../models/mocks/sales.models.mock')
describe("[Service]Testing getAll", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("Testing getAll function return", async function () {
    sinon.stub(salesModel, 'getAllSales').resolves(allSalesModel)

    const result = await salesService.getAll()

    expect(result).to.be.equal(allSalesService);

  })
})

describe("[Service]Testing sale assign", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("Testing if the function is called", async function () {
    sinon.stub(salesModel, 'saleAssign').resolves(2);
    const result = await salesService.saleAssign()

    expect(result).to.be.equal(2);
  })
})
