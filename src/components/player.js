import React from "react"
import ScriptTag from 'react-script-tag'
import H5Player from 'react-h5-audio-player'
import 'react-h5-audio-player/src/styles.scss'

import playerStyles from "./player.module.scss" 

const Player = () => {
  return (
    <div>
      <div className= {playerStyles.container}>
        <ScriptTag  className= {playerStyles.artwork} src="https://embed.radio.co/embed/s9e2b0d28b/artwork.js" />
        <ScriptTag  src="https://embed.radio.co/embed/s9e2b0d28b/song.js" /> 
        <H5Player src="https://s2.radio.co/s9e2b0d28b/listen"/>
      </div>   
    </div>
  )
}

export default Player