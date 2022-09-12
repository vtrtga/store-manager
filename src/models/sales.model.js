const connection = require('../connection');

const getAllSales = () => {
  const result = connection.execute(
    'SELECT * FROM StoreManager.sales',
    [],
  ); 
  return result;
};

module.exports = {
  getAllSales,
};