import React from 'react';
import './primaryBtnStyles.scss';

const PrimaryCTAButton = props => {

    return (
        <button
            className={`primaryBtn ${props.icon ? "primaryBtn--grid" : null}`}
            onClick={props.handleClick}
        >
            {props.icon && props.icon}
            {props.label}
        </button>


    );
}

export default PrimaryCTAButton;