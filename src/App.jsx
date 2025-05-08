import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Recipes from './Pages/Recipes.jsx';  
import Blog from './Pages/Blog.jsx';

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;