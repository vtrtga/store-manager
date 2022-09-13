// const Joi = require('joi');

// const newSaleSchema = Joi.array().items(Joi.object({
//   productId: Joi.number().required().messages({
//     'number.empty': '"productId" is required',
//   }),
//   quantity: Joi.number().greater(0).required().messages({
//     'number.greater': '"quantity" must be greater than or equal to 1',
//     'number.empty': '"quantity" is required',
//   }),
// }));

// const errorType = (err) => {
//   if (err === 'number.empty') {
//     return 400;
//   }
//   if (err === 'number.greater') {
//     return 422;
//   }
// };

// const salesInsertValidation = (req, res, next) => {
//   const { body } = req;
//   const { error } = newSaleSchema.validate(body);
//   if (error) {
//     return res.status(404).json(error);
//   }
//   next();
// };

// module.exports = {
//   salesInsertValidation,
// };