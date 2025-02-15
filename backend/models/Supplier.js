const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    email:{type: String, required:true},
    password:{type: String, required:true},
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, default: 0 },
    products: [{
        productId: { type: Number, required: true },
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        deliveryTime: { type: Number, required: true }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Supplier', SupplierSchema);