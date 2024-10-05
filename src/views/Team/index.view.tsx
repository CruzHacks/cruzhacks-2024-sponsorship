import React from "react"
import About from "./About/index.view"
import Members from "./Members/index.view"

import "./index.scss"

const Team: React.FC = () => {
  return (
    <div className='team__container'>
      <p>TEST change</p>
      <About />
      <Members />
    </div>
  )
}

export default Team
