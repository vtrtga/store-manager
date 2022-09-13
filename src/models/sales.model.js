const connection = require('../connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id as saleId, s.date,
    sp.product_id as productId, sp.quantity FROM sales_products as sp
    JOIN products as p ON sp.product_id = p.id
    JOIN sales as s ON p.id = s.id;`,
    [],
  );
  return result;
};

const saleAssign = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
    [],
  );
  return insertId;
};

module.exports = {
  saleAssign,
  getAllSales,
};