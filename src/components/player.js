import React from 'react'
import ReactHowler from 'react-howler'
import ScriptTag from 'react-script-tag';


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
        <ScriptTag src="https://embed.radio.co/embed/s9e2b0d28b/artwork.js"/>
        <div className={PlayerStyles.playing}>
          <div className={PlayerStyles.trackInfo}>
            <p>Now Playing:</p> <ScriptTag src="https://embed.radio.co/embed/s9e2b0d28b/song.js"/>
          </div>
          
          <div className={PlayerStyles.trackInfo}>
            <p>Next Up:</p> <ScriptTag src="https://embed.radio.co/embed/s9e2b0d28b/next.js"/>
          </div>
        </div>
        <button onClick={this.handlePlay}>
          {this.state.playing ? 'Stop' : 'Play'}
        </button>
      </div>
    )
  }
}

export default Player