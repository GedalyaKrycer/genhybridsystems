import React from 'react';
import './TabImageStyles.scss';

const TabImage = props => {



    return (

        <div
            className="tab-image"
            style={{
                background: `linear-gradient(270deg, #39251C 0%, rgba(57, 37, 28, 0.4) 80%), url(${props.image}) no-repeat`,
                backgroundSize: 'cover'
            }} />

    );


};

export default TabImage;
