import React from "react"
import headerStyles from "./header.module.scss"

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      page: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(pageName) {
    this.props.data.handleClick(pageName)
  }

  render() {
    return (
      <header className={headerStyles.header}>
      <h2>
        <div className={headerStyles.title}>
          MDFR
        </div>
      </h2>
        <nav>
          <ul className={headerStyles.navList}>
            <li><div onClick={() =>this.handleClick("Home")} className={headerStyles.navItem}>Home</div></li>
            <li><div onClick={() =>this.handleClick("About")} className={headerStyles.navItem}>About</div></li>
            <li><div onClick={() =>this.handleClick("Requests")} className={headerStyles.navItem}>Requests</div></li>
            <li><div onClick={() =>this.handleClick("Contact")} className={headerStyles.navItem}>Contact</div></li>
            <li><div onClick={() =>this.handleClick("Get Involved")} className={headerStyles.navItem}>Get Involved</div></li>
            <li><div onClick={() =>this.handleClick("Resources")} className={headerStyles.navItem}>Resources</div></li>
          </ul>
        </nav>
    </header>
    )
  }
}

export default Header