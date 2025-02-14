import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/suppliers')
            .then(response => setSuppliers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Suppliers</h1>
            <ul>
                {suppliers.map(supplier => (
                    <li key={supplier._id}>{supplier.name} - {supplier.location}</li>
                ))}
            </ul>
        </div>
    );
}

export default Suppliers;