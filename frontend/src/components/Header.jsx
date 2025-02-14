import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: '#282c34', padding: '10px', color: 'white', textAlign: 'center' }}>
      <h2>Supplier Order Matching System</h2>
      <nav>
        <Link to="/" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/suppliers" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Suppliers</Link>
        <Link to="/orders" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Orders</Link>
        <Link to="/register-supplier" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Sign Up</Link>
        <Link to="/login" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Login</Link>
      </nav>
    </header>
  );
}

export default Header;