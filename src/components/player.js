import React from 'react'
import ReactHowler from 'react-howler'
import ScriptTag from 'react-script-tag';

import Grid from '@material-ui/core/Grid'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';


import PlayerStyles from "./player.module.scss"

class Player extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay () {
    this.setState({
      playing: !this.state.playing
    })
    if (this.state.playing === true) {
      this.player.stop()
      }
    }

  render () {
    return (
      <div className={PlayerStyles.container}> 
        <ReactHowler
          src='https://s2.radio.co/s9e2b0d28b/listen'
          playing={this.state.playing}
          ref={(ref) => (this.player = ref)}
          preload= {true}
          html5= {true}
        />

        <div>
          <div onClick={this.handlePlay} onKeyDown={this.handleClick} className={PlayerStyles.button}>
            {this.state.playing ? 
              <StopIcon style={{ fontSize: 100 }}/> : 
              <PlayArrowIcon  style={{ fontSize: 100 }}/>}
          </div>
        </div>

        <div>
          <ScriptTag src="https://embed.radio.co/embed/s9e2b0d28b/artwork.js"/>
        </div>

        <div className={PlayerStyles.playing}>
          <div className={PlayerStyles.trackInfo}>
            <p>Now Playing:</p> 
            <ScriptTag src="https://embed.radio.co/embed/s9e2b0d28b/song.js"/>
          </div>
          <div className={PlayerStyles.trackInfo}>
            <p>Next Up:</p> 
            <ScriptTag src="https://embed.radio.co/embed/s9e2b0d28b/next.js"/>
          </div>
        </div>

      </div>
    )
  }
}

export default Player