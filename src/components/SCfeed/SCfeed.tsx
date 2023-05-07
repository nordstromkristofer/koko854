import React from "react"
import ReactPlayer from "react-player"

import './SCfeed.css'

function SCfeed() {
  return (
    <div >
      <ReactPlayer className="SCplayer"
        url="https://soundcloud.com/kristougha/pressurin"
      />
    </div>
  )
}

export default SCfeed