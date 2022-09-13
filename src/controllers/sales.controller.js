const { salesService } = require('../services');

const getAll = async (_req, res) => {
  const result = await salesService.getAll();

 return res.status(200).json(result);
};

module.exports = {
  getAll,
};