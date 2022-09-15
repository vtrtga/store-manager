const { productsService } = require('../services');
const { saleSchema } = require('../validations');

const { getById } = productsService;
const salesValidation = (req, res, next) => {
  const { error } = saleSchema.validate(req.body);
  if (error) {
    if (error.details[0].type === 'number.greater') {
      return res.status(422).json({ message: error.details[0].message });
    }
    if (error.details[0].type === 'number.empty') {
      return res.status(400).json({ message: error.details[0].message });
    }
      return res.status(400).json({ message: error.details[0].message.replace(/\[0]\./, '') });
  }
  next();
};

const productExist = async (req, res, next) => {
  const { body } = req;
  const result = await Promise.all(body.map(async (item) => {
    const p = await getById(item.productId);
    console.log(p);
    return p;
  }));
  const someEmpty = result.some((e) => e.length < 1);

  if (someEmpty) {
    return res.status(404).json({ message: 'Product not found' });
  }
  if (result.length !== req.body.length) {
    return res.status(404).json({ message: 'Product not found' });
  }
  if (result.length < 1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};
module.exports = {
  productExist,
  salesValidation,
};