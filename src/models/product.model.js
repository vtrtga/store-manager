const connection = require('../connection');

const getAllProducts = async () => {
  const [data] = await connection.execute(
    'SELECT * FROM products',
    [],
  );

  return data;
};

const getProductById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const assignProduct = async (product) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product],
  );
  
  return result.insertId;
};

module.exports = {
  assignProduct,
  getAllProducts,
  getProductById,
};