import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';


function App() {
  return (
    <Router>
      <div>
       
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;