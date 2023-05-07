import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Instafeed from './components/instafeed/Instafeed';
import Home from './components/home/Home';


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
