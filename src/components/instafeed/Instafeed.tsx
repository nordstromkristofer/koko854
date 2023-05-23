import React, { useState, useEffect } from 'react';
import './instafeed.css'
import Header from '../header/header'
import instaImg from './insta2.png'
import instaImg2 from './insta.png'
import soundCImg from './soundcloud2.png'
import soundCImg2 from './soundcloud1.png'
import mixCImg from './mixcloud3.png'

const instaAccesstoken = (process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN);

interface Post {
  id: string;
  media_type: string;
  media_url: string;
  caption: string;
}

function Instafeed() {
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
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className='componentContainer'>

            <div className='feedContainer'>
              <div className='logolinks'>
                <a href="http://instagram.com/koko__854" target="_blank" rel="noopener noreferrer" className="instalogo" >
                  <img src={instaImg} className="instalogo" alt="Instagramlogo" />
                  <img src={instaImg2} className="instalogo2" alt="Instagramlogo2" />
                </a>
                <a href="https://soundcloud.com/kristougha" target="_blank" rel="noopener noreferrer" className="soundcloudlogo" >
                  <img src={soundCImg} className="soundcloudlogo" alt="Soundcloudlogo" />
                  <img src={soundCImg2} className="soundcloudlogo2" alt="Soundcloudlogo2" />
                </a>
                <a href="https://www.mixcloud.com/koko854/" target="_blank" rel="noopener noreferrer" className="mixcloudlogo" >
                  <img src={mixCImg} className="instalogo" alt="Mixcloudlogo" />
                </a>
              </div>
              <div className={`mainFeed${isAnimated ? ' animate' : ''}`}>
                {data.map((item: Post) => (
                  <div key={item.id} className='instaborder'>
                    <img src={item.media_url} alt={item.caption} className='instaimg' />
                    <p>{item.caption}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default Instafeed;
