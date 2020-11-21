import React from "react"
import About from "../pages/about"
import Contact from "../pages/contact"
import GetInvovled from "../pages/getInvolved"


class Content extends React.Component {
  render() {
    return (
      <div>
        {this.props.page == 'About' ? <About /> :
        this.props.page == 'Contact' ? <Contact /> :
        this.props.page == 'GetInvolved' ? <GetInvovled /> :
        "Home"
        }
      </div>
    )
  }
}

export default Content