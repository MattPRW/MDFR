import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Content from "../components/content"
import "../styles/index.scss"

import layoutStyles from "./layout.module.scss"

class Layout extends React.Component {
  constructor() {
    super()

    this.state = {
      page: 'Home'
    }

    this.handleClick = this.handleClick.bind(this)
  }

handleClick(pageName) {
  this.setState({ page: pageName })
}

render() {
  return(
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header data= {{handleClick: this.handleClick.bind(this)}}/>
        <Content { ...this.state }/>
      </div>
        <Footer />
    </div>
  )
}
}

export default Layout