import React from 'react';
import './aboutContainerStyles.scss';
import SectionLayout from "../../ui/SectionLayout/SectionLayout";
import aboutContentImage1 from '../../../assets/about-content-img-1.jpg';
import aboutContentImage2 from '../../../assets/about-content-img-2.jpg';

const AboutContainer = props => {

    return(
        <SectionLayout customClass="about__container">
            <h2 className="about__section-title">About</h2>
            <div className="about__content-section">
                <div className="about__content-text-container">
                    <h3 className="about__content-subtitle">Mission + Vision Statement</h3>
                    <p className="about__content-text">Gen Hybrid Systems, LLC was formed with the goal to promote autonomous learning, with the utilization of traditional face to face instruction concurrently with online teaching. In today’s fast paced technology-oriented environment, students independently discover an array of information ranging from world issue to fashion trends, with an inclination towards matters that pique their interest.</p>
                    <p className="about__content-text">Embracing a student centric environment allows a relationship where teachers are mentors instead of an authoritative figure. The Hybrid learning experience cultivates flexibility and versatility that encourages pupil aspiration.</p>
                </div>
                <img
                    src={aboutContentImage1}
                    alt="Young students outside of school"
                    className="about__content-image"
                />
            </div>
            <div className="about__quote-container">
                <blockquote className="about__quote">
                    “The system of schooling which occupies ten or more years of education for the majority of children and youth in each society does great good for some and may be very damaging for others. It offers all an opportunity to learn – but does so on its own terms”
                </blockquote>
                <h4 className="about__quote-author">— Benjamin Bloom</h4>
            </div>

        </SectionLayout>
    );


};

export default AboutContainer;
