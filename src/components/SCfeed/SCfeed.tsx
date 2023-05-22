import React, { useState } from "react"
import ReactPlayer from "react-player"
import Card from '@mui/material/Card';

import Header from '../header/header'


import './SCfeed.css'

function SCfeed() {
  const tracks = [
    "https://soundcloud.com/kristougha/radio854vol1",
    "https://soundcloud.com/kristougha/radio854vol2",
    "https://soundcloud.com/kristougha/pressurin",
    "https://soundcloud.com/gull33/koko-toyan-gull33-guest-mix-01",
    "https://soundcloud.com/kristougha/kokoivan-mix-v1",
    "https://soundcloud.com/1992presents/1992-presents-koko854-20"
  ];

  const [playingUrl, setPlayingUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);

  const handlePlay = (url: string) => {
    console.log("handlePlay called");
    setPlayingUrl(url);
    setPlaying(true);
  };


  const handlePause = () => {
    console.log("handlePause");
    setPlaying(false);
  };

  const playerStyle = {
    borderRadius: '20px',

    overflow: 'hidden'
  }

  const playerConfig = {
    soundcloud: {
      options: {
        show_artwork: true,
        show_comments: false,
        show_user: true,
        visual: true,
      }
    }
  }

  const cardStyle = {
    borderRadius: '20px',
    overflow: 'hidden'
  };

  console.log("render");

  return (
    <div>

      <div className="bkground">
        <Header />
        <div className="container">

          <div className="SCfeed">
            {tracks.map((track, index) => (
              <div key={index} className="SCtrack" onClick={() => handlePlay(track)}>
                <Card className="SoundCard" sx={{ width: "100%", display: "flex", backgroundColor: "#395639", opacity: "80%" }} style={cardStyle} >
                  <ReactPlayer
                    className="SCplayer"
                    url={track}
                    width="440px"
                    height="160px"
                    style={playerStyle}
                    config={playerConfig}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default SCfeed
