import React, { useState, useEffect } from 'react';
import './home.css'
import Header from '../header/header'

import { TfiEmail } from 'react-icons/tfi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const instaAccesstoken = (process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN);

interface Post {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
}

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Post[]>([]);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=${instaAccesstoken}`)
      .then(response => response.json())
      .then(response => {
        setData(response.data);
        setIsLoading(false);
        setIsAnimated(true);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>

      <div className='bkground'>
        <Header />

        <div className='inforuta'>
          <div className='biglogos'>
            <a href="mailto:nordstromkristofer@gmail.com" className="emaillogo" ><TfiEmail color="white" size="15rem" /></a>
            <a className="line"><HiOutlineDotsVertical size="15rem" color="white" /></a>
            <a href="https://www.linkedin.com/in/kristofer-nordstr%C3%B6m-b80885224/" className="linkedinlogo" ><AiOutlineLinkedin color="white" size="15rem" /></a>
          </div>

          <div className='smalllogos'>
            <a href="mailto:nordstromkristofer@gmail.com" className="emaillogo" ><TfiEmail color="white" size="6rem" /></a>
            <a className="line"><HiOutlineDotsHorizontal size="6rem" color="white" /></a>
            <a href="https://www.linkedin.com/in/kristofer-nordstr%C3%B6m-b80885224/" className="linkedinlogo" ><AiOutlineLinkedin color="white" size="6rem" /></a>
          </div>
        </div>
        <div className='bubz'>
          <section className="sticky">
            <div className="bubbles">
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>

            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default Home;
