import React from 'react';
import './heroStyles.scss';
import SectionLayout from "../../ui/SectionLayout/SectionLayout";
import MobileSocialMediaBar from "../MobileSocialMediaBar/MobileSocialMediaBar";


const HeroContainer = props => {


    return (
        <>
            <SectionLayout customClass="hero__container">
                <div className="hero__content">
                    <h1>Education on <span className="g__text-emphasis">their</span> terms brings hope</h1>
                    <p className="hero__subhead">Our hybrid classroom and at-home learning model makes education accessible in underserved communities. </p>
                    <MobileSocialMediaBar />
                </div>

            </SectionLayout>


            <div className="hero__img-container">
                <div className="hero__bg-img hero__img-1" />
                <div className="hero__bg-img hero__img-2"/>
                <div className="hero__bg-img hero__img-1"/>
                <div className="hero__bg-img hero__img-2"/>
                <div className="hero__bg-img hero__img-1"/>
            </div>
        </>
    );
}

export default HeroContainer;
