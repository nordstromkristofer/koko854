import React, { useState, useEffect } from 'react';
import './instafeed.css'

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

  useEffect(() => {
    fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=${instaAccesstoken}`)
      .then(response => response.json())
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='bkground'>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='mainFeed'>
          {data.map((item: Post) => (
            <div key={item.id}>
              <img src={item.media_url} alt={item.caption} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Instafeed;
