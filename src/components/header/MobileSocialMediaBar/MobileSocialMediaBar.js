import React from 'react';
import './mobileSocialMediaBarStyles.scss';
import SocialMediaIcon from "../../ui/SocialMediaIcon/SocialMediaIcon";


const MobileSocialMediaBar = props => {


    return (
        <div className="smbar__container">
            <p className="smbar__title">follow</p>
            <div className="smbar__fade-right"/>

            <div className="smbar__icons">
                <SocialMediaIcon
                    type={"youtube"}
                    location={"mobile-hero"}
                    theme={"light"}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"facebook"}
                    location={"mobile-hero"}
                    theme={"light"}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"instagram"}
                    location={"mobile-hero"}
                    theme={"light"}
                    disable={false}
                />
                {/*<SocialMediaIcon*/}
                {/*    type={"linkedin"}*/}
                {/*    location={"mobile-hero"}*/}
                {/*    theme={"light"}*/}
                {/*    disable={false}*/}
                {/*/>*/}
                {/*<SocialMediaIcon*/}
                {/*    type={"twitter"}*/}
                {/*    location={"mobile-hero"}*/}
                {/*    theme={"light"}*/}
                {/*    disable={false}*/}
                {/*/>*/}
                {/*<SocialMediaIcon*/}
                {/*    type={"ticktock"}*/}
                {/*    location={"mobile-hero"}*/}
                {/*    theme={"light"}*/}
                {/*    disable={false}*/}
                {/*/>*/}

                <div className="smbar__spacer"></div>

            </div>
        </div>
    );
};

export default MobileSocialMediaBar;
