const { salesModel } = require('../models');

const getAll = async () => {
  const result = await salesModel.getAllSales();
  return result;
};
const getById = async (id) => {
  const result = await salesModel.getSaleById(id);
  if (result.length < 1) {
    return { message: 'Sale not found' };
  } 
  return result;
};

const saleAssign = async (sales) => {
  const result = await salesModel.saleAssign(sales);
  return result;
};
module.exports = {
  saleAssign,
  getById,
  getAll,
};