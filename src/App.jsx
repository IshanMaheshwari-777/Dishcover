import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Recipes from './Pages/Recipes.jsx';  
import Blog from './Pages/Blog.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />       
          <Route path="/home" element={<Home />} /> 

          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      
    </Router>
  );
}

export default App;
