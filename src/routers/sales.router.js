const express = require('express');

const { salesController } = require('../controllers');
const { salesValidation } = require('../middlewares/validations');

const router = express.Router();

router.get('/', salesController.getAll);

router.post('/', salesValidation, salesController.saleAssign);

router.get('/:id', salesController.getById);

module.exports = router;