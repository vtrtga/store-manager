const { productsService } = require('../services');

const getAll = async (_req, res) => {
  const result = await productsService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const [result] = await productsService.getById(id);
  if (!result) { return res.status(404).json({ message: 'Product not found' }); }
  return res.status(200).json(result);
};

const insert = async (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  const result = await productsService.insert(name);

  return res.status(201).json({
    name,
    id: result,
  });
};

module.exports = {
  insert,
  getAll,
  getById,
};