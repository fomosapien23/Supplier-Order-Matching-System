const Supplier = require('../models/Supplier');

exports.registerSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json({ message: 'Supplier registered successfully', supplier });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
<<<<<<< Updated upstream
exports.getSupplierDetails = async (req, res) => {
=======

exports.getSuppliers = async (req, res) => {
>>>>>>> Stashed changes
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOptimalSupplier = async (req, res) => {
    try {
        const { productId, quantity } = req.query;
        const suppliers = await Supplier.find({ 'products.productId': productId, 'products.stock': { $gte: quantity } });
        if (suppliers.length === 0) return res.status(404).json({ message: 'No supplier available' });
        
        // Optimal supplier selection based on price, stock, and delivery time
        const bestSupplier = suppliers.sort((a, b) => a.products[0].price - b.products[0].price)[0];
        res.status(200).json(bestSupplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};