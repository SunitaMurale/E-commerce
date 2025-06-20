import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsPage from './components/ProductsPage';
import Sidebar from './components/Sidebar';
import NotPlaced from './components/NotPlaced';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-100">
          <Routes>
           <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsPage />} />
             <Route path="/orders" element={<NotPlaced />} />
            <Route path="/customers" element={<NotPlaced />} />
            <Route path="/analytics" element={<NotPlaced />} />
            <Route path="/settings" element={<NotPlaced />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
