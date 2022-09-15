const express = require('express');

const { productExist } = require('../middlewares/salesMiddlewares');

const { salesController } = require('../controllers');
const { salesValidation } = require('../middlewares/salesMiddlewares');

const router = express.Router();

router.get('/', salesController.getAll);

router.post('/', salesValidation, productExist, salesController.saleAssign);

router.get('/:id', salesController.getById);

module.exports = router;