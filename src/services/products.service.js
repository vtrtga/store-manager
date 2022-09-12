const { productModel } = require('../models');

const getAll = async () => {
  const result = await productModel.getAllProducts();

  return result;
};

const getById = async (id) => {
  const result = await productModel.getProductById(id);
  
  return result;
};

const insert = async (product) => {
  const result = await productModel.assignProduct(product);

  return result;
};

module.exports = {
  insert,
  getAll,
  getById,
};