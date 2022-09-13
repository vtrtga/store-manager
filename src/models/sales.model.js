const connection = require('../connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sp.sale_id as saleId, s.date,
    sp.product_id as productId, sp.quantity FROM sales_products as sp
    JOIN products as p ON sp.product_id = p.id
    JOIN sales as s ON sp.sale_id = s.id
    ORDER BY s.id, p.id;`,
    [],
  );
  return result;
};

const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT s.date,
    sp.product_id as productId, sp.quantity FROM sales_products as sp
    JOIN products as p ON sp.product_id = p.id
    JOIN sales as s ON p.id = s.id 
    WHERE sp.sale_id = ?;`,
    [id],
  );
  
  return result;
};

const saleDateAssign = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
    [],
  );
  return insertId;
};

const saleAssign = async (sales) => {
  const saleId = await saleDateAssign();
  await Promise.all(sales.map(async (s) => {
    await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, s.productId, s.quantity],
    );
}));
return saleId;
};
  module.exports = { 
    saleAssign,
    getSaleById,
    getAllSales,
  };