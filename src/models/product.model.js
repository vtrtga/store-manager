const connection = require('../connection');

const getAllProducts = async () => {
  const [data] = await connection.execute(
    'SELECT * FROM products',
    [],
  );

  return data;
};

const getProductById = async (id) => {
  const [[insertId]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return insertId;
};

module.exports = {
  getAllProducts,
  getProductById,
};