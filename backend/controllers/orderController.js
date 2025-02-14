// Backend (Node.js + Express)
// File: backend/controllers/orderController.js
const Order = require('../models/Order');
const Supplier = require('../models/Supplier');

exports.placeOrder = async (req, res) => {
    try {
        const { customerName, productId, quantity } = req.body;
        const suppliers = await Supplier.find({ 'products.productId': productId, 'products.stock': { $gte: quantity } });
        if (suppliers.length === 0) return res.status(404).json({ message: 'No supplier available' });
        const bestSupplier = suppliers.sort((a, b) => a.products[0].price - b.products[0].price)[0];
        const assignedSupplier = {
            supplierId: bestSupplier._id,
            name: bestSupplier.name,
            location: bestSupplier.location,
            price: bestSupplier.products[0].price,
            estimatedDeliveryTime: bestSupplier.products[0].deliveryTime
        };
        const order = await Order.create({ customerName, productId, quantity, assignedSupplier });
        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOrderDetails = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json({ message: 'Order status updated', order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
