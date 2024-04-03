import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar'; // Import Navbar
import AllProducts from './AllProducts';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />  
        <Routes>
          <Route exact path='/' element={<AllProducts />} />
          <Route exact path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
