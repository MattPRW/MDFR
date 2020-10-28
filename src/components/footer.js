import React from "react"
import Player from "./player"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.footerContainer}>
      <Player />
      <small>© Merseyside Dementia Friendly Radio 2020 </small>
    </div>
  )
}

export default Footer