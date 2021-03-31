import React from 'react';
import './navbarStyles.scss'
import SocialMediaIcon from "../../ui/SocialMediaIcon/SocialMediaIcon";
import PrimaryCTAButton from "../../ui/PrimaryCTAButton/PrimaryCTAButton";

const Navbar = props => {

    const mailchimpModalHandler = () => {
        alert("Modal clicked")
    }

    return (
        <nav className="navBar">
            <div className="temp-logo">Logo</div>
            <ul className="navbar__links">
                <li><a href="#crisis">crisis</a></li>
                <li><a href="#mission">mission</a></li>
                <li><a href="#videos">videos</a></li>
                <li><a href="#connect">connect</a></li>
            </ul>

            <div className="navbar__social-container">
                <SocialMediaIcon
                    type={"youtube"}
                    location={"mobile-nav"}
                    height={40}
                    width={28}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"ticktock"}
                    location={"mobile-nav"}
                    height={27}
                    width={30}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"instagram"}
                    location={"mobile-nav"}
                    height={31}
                    width={30}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"snapchat"}
                    location={"mobile-nav"}
                    height={33}
                    width={30}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"twitter"}
                    location={"mobile-nav"}
                    height={34}
                    width={28}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"facebook"}
                    location={"mobile-nav"}
                    height={30}
                    width={31}
                    disable={false}
                />
            </div>

            <div className="navbar__cta-container">
                <PrimaryCTAButton
                    handleClick={mailchimpModalHandler}
                    label="get updates"
                    icon={null}
                />
            </div>
        </nav>
    );
}

export default Navbar;
