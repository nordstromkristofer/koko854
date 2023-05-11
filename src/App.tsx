import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Instafeed from './components/instafeed/Instafeed';
import Home from './components/home/Home';
import SCfeed from './components/SCfeed/SCfeed';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instafeed" element={<Instafeed />} />
        <Route path="/soundcloud" element={<SCfeed />} />
      </Routes>
    </Router>
  );
}

export default App;
