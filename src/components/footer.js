import React from "react"
import Player from "./player"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.footerContainer}>
      <Player />
    </div>
  )
}

export default Footer