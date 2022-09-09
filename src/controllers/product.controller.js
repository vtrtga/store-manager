const { productsService } = require('../services');

const getAll = async (_req, res) => {
  const result = await productsService.getAll();
  res.status(200).json(result);
  console.log(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getById(id);
  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(result);
};

module.exports = {
  getAll,
  getById,
};