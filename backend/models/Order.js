// Backend (Node.js + Express)
// File: backend/models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
    assignedSupplier: {
        supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
        name: String,
        location: String,
        price: Number,
        estimatedDeliveryTime: Number
    },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Canceled'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);