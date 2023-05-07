import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Instafeed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`);
        setFeed(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFeed();
  }, []);

  return (
    <>
      <h1>My Instagram Feed</h1>
      <div>
        {feed.map(post => (
          <div key={post.id}>
            {post.media_type === 'VIDEO' ? (
              <video src={post.media_url} controls width="100%" />
            ) : (
              <img src={post.media_url} alt={post.caption} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Instafeed;
