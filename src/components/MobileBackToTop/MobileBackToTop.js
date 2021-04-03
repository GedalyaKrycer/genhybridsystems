import React, {useState} from 'react';
import './mobileBackToTopStyles.scss';
import BackToTopButton from "../ui/BackToTopButton/BackToTopButton";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

const MobileBackToTop = props => {
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
        <div className="mbt__layout">
            <BackToTopButton  location={"mobile-pin"} showBtn={showButton}/>
        </div>
    );


};

export default MobileBackToTop;
