import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './home.css'
import Header from '../header/header'

function Home() {
  return (
    <div>
      <Header />
      <div className='homediv'>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
