// Backend (Node.js + Express)
// File: backend/routes/supplierRoutes.js
const express = require('express');
const router = express.Router();
const { registerSupplier, getSupplierDetails } = require('../controllers/supplierController');

router.post('/', registerSupplier);
router.get('/:id', getSupplierDetails);

module.exports = router;