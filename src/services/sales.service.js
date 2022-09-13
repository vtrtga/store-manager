const { salesModel } = require('../models');

const getAll = async () => {
  const result = await salesModel.getAllSales();
  return result;
};

module.exports = {
  getAll,
};