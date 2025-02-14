import React, { useState } from 'react';
import axios from 'axios';

function OptimalSupplier() {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [supplier, setSupplier] = useState(null);

    const fetchOptimalSupplier = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/suppliers/optimal?productId=${productId}&quantity=${quantity}`);
            setSupplier(response.data);
        } catch (error) {
            console.error('Error fetching optimal supplier', error);
        }
    };

    return (
        <div>
            <h1>Find Optimal Supplier</h1>
            <input type="text" placeholder="Product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={fetchOptimalSupplier}>Find Supplier</button>
            {supplier && (
                <div>
                    <h2>Best Supplier</h2>
                    <p>Name: {supplier.name}</p>
                    <p>Location: {supplier.location}</p>
                </div>
            )}
        </div>
    );
}

export default OptimalSupplier;
