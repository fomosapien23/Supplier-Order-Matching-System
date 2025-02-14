// Backend (Node.js + Express)
// File: backend/controllers/supplierController.js
const Supplier = require('../models/Supplier');

exports.registerSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json({ message: 'Supplier registered successfully', supplier });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSupplierDetails = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};