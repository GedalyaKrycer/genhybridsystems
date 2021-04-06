import React from 'react';
import './milestoneCardStyles.scss';

const MilestoneCard = props => {

    return(
        <div className="milestone___card">
            <h2 className="milestone__date">{props.date}</h2>
            <h4 className="milestone__event">{props.event}</h4>
        </div>
    );


};

export default MilestoneCard;
