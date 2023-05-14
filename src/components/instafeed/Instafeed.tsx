import React, { useState, useEffect } from 'react';
import './instafeed.css'
import Header from '../header/header'

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
