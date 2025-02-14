// Frontend (React)
// File: frontend/src/pages/Orders.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>{order.customerName} - {order.status}</li>
                ))}
            </ul>
        </div>
    );
}

export default Orders;