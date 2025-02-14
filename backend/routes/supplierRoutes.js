const express = require('express');
const router = express.Router();
const { registerSupplier, getSuppliers, getOptimalSupplier } = require('../controllers/supplierController');

router.post('/', registerSupplier);
router.get('/', getSuppliers);
router.get('/optimal', getOptimalSupplier);

module.exports = router;