const { productModel } = require('../models');

const getAll = async () => {
  const result = await productModel.getAllProducts();

  return result;
};
const getById = async (id) => {
  const result = productModel.getProductById(id);

  return result;
};
module.exports = {
  getAll,
  getById,
};