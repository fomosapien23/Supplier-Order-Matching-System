import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to Supplier Order Matching System</h1>
        <p>Find the best supplier for your orders efficiently.</p>
        <nav>
          <Link to="/suppliers" style={{ margin: '10px', textDecoration: 'none', fontSize: '18px' }}>View Suppliers</Link>
          <Link to="/orders" style={{ margin: '10px', textDecoration: 'none', fontSize: '18px' }}>View Orders</Link>
        </nav>
      </div>
      <Footer />
    </>
  );
}

export default Home;