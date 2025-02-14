// Frontend (React)
// File: frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Suppliers from './pages/Suppliers';
import Orders from './pages/Orders';
import RegisterSupplier from './pages/RegisterSupplier';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/register-supplier" element={<RegisterSupplier />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;