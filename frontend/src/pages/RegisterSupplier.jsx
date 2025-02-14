import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegisterSupplier() {
    const navigate = useNavigate();
    const [supplier, setSupplier] = useState({
        name: '',
        email: '',
        password: '',
        location: '',
        rating: '',
        products: [{ productId: '', productName: '', price: '', stock: '', deliveryTime: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplier({ ...supplier, [name]: value });
    };

    const handleProductChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProducts = supplier.products.map((product, i) => (
            i === index ? { ...product, [name]: value } : product
        ));
        setSupplier({ ...supplier, products: updatedProducts });
    };

    const addProduct = () => {
        setSupplier({
            ...supplier,
            products: [...supplier.products, { productId: '', productName: '', price: '', stock: '', deliveryTime: '' }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/suppliers/register', supplier);
            alert('Supplier registered successfully!');
            navigate('/login');
        } catch (error) {
            console.error('Error registering supplier:', error);
        }
    };

    return (
        <div>
            <h1>Supplier Registration</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Supplier Name" value={supplier.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={supplier.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={supplier.password} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={supplier.location} onChange={handleChange} required />
                <input type="number" name="rating" placeholder="Rating" value={supplier.rating} onChange={handleChange} required />
                <h2>Product Catalog</h2>
                {supplier.products.map((product, index) => (
                    <div key={index}>
                        <input type="text" name="productId" placeholder="Product ID" value={product.productId} onChange={(e) => handleProductChange(index, e)} required />
                        <input type="text" name="productName" placeholder="Product Name" value={product.productName} onChange={(e) => handleProductChange(index, e)} required />
                        <input type="number" name="price" placeholder="Price" value={product.price} onChange={(e) => handleProductChange(index, e)} required />
                        <input type="number" name="stock" placeholder="Stock" value={product.stock} onChange={(e) => handleProductChange(index, e)} required />
                        <input type="number" name="deliveryTime" placeholder="Delivery Time (days)" value={product.deliveryTime} onChange={(e) => handleProductChange(index, e)} required />
                    </div>
                ))}
                <button type="button" onClick={addProduct}>Add Another Product</button>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default RegisterSupplier;
