import React, {useState} from 'react';
import './pinnedSideBarStyles.scss';
import SocialMediaIcon from "../ui/SocialMediaIcon/SocialMediaIcon";
import BackToTopButton from "../ui/BackToTopButton/BackToTopButton";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

const PinnedSideBar = props => {
    const [showButton, setShowButton] = useState(false);


    useScrollPosition(
        ({ prevPos, currPos }) => {
            console.log(currPos)
            const isShow = currPos.y < -200;
            if (isShow !== showButton) setShowButton(isShow)
        },
        [showButton],
        false,
        false,
        300
    );

    return(
        <div className="psb__layout">
            <div className="psb__container">
                <BackToTopButton  location={"sidebar"} showBtn={showButton}/>
                <div className="psb__social-container">
                    <p className="psb__social-text">social</p>
                    <span className="psb__line-break"/>
                    <div className="psb__social-icons">
                        <SocialMediaIcon
                            type={"youtube"}
                            location={"sidebar"}
                            theme={"dark"}
                            disable={false}
                        />
                        <SocialMediaIcon
                            type={"facebook"}
                            location={"sidebar"}
                            theme={"dark"}
                            disable={false}
                        />
                        <SocialMediaIcon
                            type={"instagram"}
                            location={"sidebar"}
                            theme={"dark"}
                            disable={false}
                        />
                        <SocialMediaIcon
                            type={"snapchat"}
                            location={"sidebar"}
                            theme={"dark"}
                            disable={false}
                        />
                        <SocialMediaIcon
                            type={"twitter"}
                            location={"sidebar"}
                            theme={"dark"}
                            disable={false}
                        />
                        <SocialMediaIcon
                            type={"ticktock"}
                            location={"sidebar"}
                            theme={"dark"}
                            disable={false}
                        />
                    </div>
                </div>
            </div>
        <div>
        </div>

        </div>
    );


};

export default PinnedSideBar;
