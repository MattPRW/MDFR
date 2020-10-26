import React from 'react'
import ReactHowler from 'react-howler'

class Player extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      message: 'Play'
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
      <div>    
        <ReactHowler
          src='https://s2.radio.co/s9e2b0d28b/listen'
          playing={this.state.playing}
          ref={(ref) => (this.player = ref)}
          preload= {true}
          html5= {true}
        />
        {console.log(this.player.howlerState())}
        <button onClick={this.handlePlay}>
          {this.state.playing ? 'Stop' : 'Play'}
        </button>
      </div>
    )
  }
}

export default Player