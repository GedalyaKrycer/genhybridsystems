import React from 'react';
import './mobileSocialMedaBarStyles.scss';
import SocialMediaIcon from "../../ui/SocialMediaIcon/SocialMediaIcon";


const MobileSocialMedaBar = props => {


    return (
        <div className="smbar__container">
            <p className="smbar__title">follow</p>
            <div className="test"/>
            <div className="smbar__icons">
                <SocialMediaIcon
                    type={"youtube"}
                    location={"mobile-hero"}
                    height={20}
                    width={23}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"facebook"}
                    location={"mobile-hero"}
                    height={29}
                    width={30}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"instagram"}
                    location={"mobile-hero"}
                    height={30}
                    width={30}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"snapchat"}
                    location={"mobile-hero"}
                    height={30}
                    width={28}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"twitter"}
                    location={"mobile-hero"}
                    height={30}
                    width={33}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"ticktock"}
                    location={"mobile-hero"}
                    height={31}
                    width={26}
                    disable={false}
                />

            </div>
        </div>
    );
};

export default MobileSocialMedaBar;
