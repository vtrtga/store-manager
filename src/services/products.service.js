const { productModel } = require('../models');

const getAll = async () => {
  const result = await productModel.getAllProducts();

  return result;
};
const getById = async (id) => {
  const result = await productModel.getProductById(id);
  console.log(result);
  
  return result;
};
module.exports = {
  getAll,
  getById,
};