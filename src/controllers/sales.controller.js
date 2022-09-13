const { salesService } = require('../services');

const getAll = async (_req, res) => {
  const result = await salesService.getAll();

 return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getById(id);
  if (result.message) {
    return res.status(404).json({ message: result.message });
  }
  return res.status(200).json(result);
};

const saleAssign = async (req, res) => {
  await salesService.saleAssign(req.body);

  return res.status(201).json(req.body);
};
module.exports = {
  saleAssign,
  getById,
  getAll,
};