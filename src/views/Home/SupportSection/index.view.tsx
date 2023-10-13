import React from "react"
import "./index.scss"
import { SocialButton } from "../../../components/Button/SocialButton"
import {
    SocialButtonInputs,
    SocialButtonProps,
  } from "../../../Props/Socials/props"


const SupportSection: React.FC = () => (
    <div className="SupportSection__container">

        {/* support us! */}
        <div className='SupportSection__SupportContainer'>
            <div className='SupportSection__SupportContainer--title'>
                SUPPORT US!
            </div>
            <div className='landing__socials-mobile'>
                {SocialButtonInputs.map(({ logo, link }: SocialButtonProps) => (
                <SocialButton logo={logo} link={link} key={link} />
                ))}
            </div>
        </div>

        {/* sponsor us! */}
        <div className="SupportSection__SponsorContainer">
            <div className='SupportSection__SponsorContainer--title'>
                SPONSOR US!
            </div>
            <div className='SupportSection__SponsorContainer--blurb'>
                Interested in sponsoring CruzHacks for our upcoming hackathon?
                 Connect with our Sponsorshop Team for more information on how 
                 supporting CruzHacks will benefit you!
            </div>
            <div className='SupportSection__SponsorContainer--button'>
                <button type="button">Connect here</button>
            </div>
        </div>
    </div>
)

export default SupportSection
