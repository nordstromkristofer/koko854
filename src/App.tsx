import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Instafeed from './Instafeed';
import Home from './Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instafeed" element={<Instafeed />} />
      </Routes>
    </Router>
  );
}

export default App;
