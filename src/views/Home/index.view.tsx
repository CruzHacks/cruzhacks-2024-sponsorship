import React from "react"
import HeroBlurb from "./HeroBlurb/index.view"
import FAQs from "./FAQs/index.view"
import Landing from "./Landing/index.view"
// import Projects from "./Projects/index.view"
import Sponsors from "./Sponsors/index.view"
import Milestones from "./Milestones/index.view"
import Tracks from "./Tracks/index.view"

import "./index.scss"
import Speakers from "./Speakers/index.view"
import SpeakerProps from "../../Props/SpeakerProps/props"

import PreviousHackathons from "./PreviousHackathons/index.view"
import {PreviousHackathonProps} from "../../Props/PreviousHackathonProps/props"

const Home: React.FC = () => (
  <>
    <Landing />
    <div className='home__container'>
      <HeroBlurb />
      <Tracks />
      <Milestones />
      <PreviousHackathons hackathons={PreviousHackathonProps} />
      <Speakers speakerData={SpeakerProps} />
      <FAQs />
      <Sponsors />
    </div>
  </>
)

export default Home
