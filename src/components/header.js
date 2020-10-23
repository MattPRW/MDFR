import React from "react"
import HeaderStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.container}>
        <div className={HeaderStyles.title}>
          <h1>Merseyside Dementia Friendly Radio</h1>
        </div>
        <div className="links">
          <h1></h1>
        </div>
      </div>
    </header>
  )
}

export default Header