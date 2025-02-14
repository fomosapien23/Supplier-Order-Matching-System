// Backend (Node.js + Express)
// File: backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { placeOrder, getOrderDetails, updateOrderStatus } = require('../controllers/orderController');

router.post('/', placeOrder);
router.get('/:id', getOrderDetails);
router.put('/:id/status', updateOrderStatus);

module.exports = router;