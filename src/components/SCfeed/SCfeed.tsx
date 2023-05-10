import React from "react"
import ReactPlayer from "react-player"

import './SCfeed.css'

function SCfeed() {
  const tracks = [
    "https://soundcloud.com/kristougha/radio854vol1",
    "https://soundcloud.com/kristougha/pressurin",
    "https://soundcloud.com/gull33/koko-toyan-gull33-guest-mix-01",
    "https://soundcloud.com/kristougha/kokoivan-mix-v1",
    "https://soundcloud.com/kristougha/radio854vol2"
  ];

  return (
    <div>
      {tracks.map((track, index) => (
        <ReactPlayer
          key={index}
          className="SCplayer"
          url={track}
        />
      ))}
    </div>
  )
}

export default SCfeed
