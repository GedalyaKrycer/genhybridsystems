import React from 'react';
import './BackToTopButtonStyle.scss';
import BackToTopIcon from '../../../assets/circl-arrow-up-icon.svg'

const BackToTopButton = props => {

    return (
        <a
            href="#top"
            className={`top__btn ${props.location === "sidebar" ? "top__btn--sidebar" : "top__btn--mobile"}`}
            style={{visibility: props.showBtn ? 'visible' : 'hidden', opacity: props.showBtn ? 1 : 0}}
        >
            <img src={BackToTopIcon} alt="back to top button" />
        </a>
    );


};

export default BackToTopButton;
