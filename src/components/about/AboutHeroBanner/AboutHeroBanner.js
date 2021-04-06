import React from 'react';
import './aboutHeroBannerStyles.scss';
import heroIcon from '../../../assets/school-icon.svg';

const AboutHeroBanner = props => {

    return(
        <section className="about-hero__container" id="about">
            <img src={heroIcon} className="about-hero__icon" alt="Icon of school"/>
            <h2 className="about-hero__title">
                We are building a <span className="g__text-emphasis">hybrid-learning school </span>
                to fight this crisis.
            </h2>
            <div className="about-hero__img" />
        </section>
    );


};

export default AboutHeroBanner;
