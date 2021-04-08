import React from 'react';
import './aboutContainerStyles.scss';
import SectionLayout from "../../ui/SectionLayout/SectionLayout";
import aboutContentImage1 from '../../../assets/about-content-img-1.jpg';
import aboutContentImage2 from '../../../assets/about-content-img-2.jpg';
import MilestoneCard from "../MilestoneCard/MilestoneCard";
import logo from '../../../assets/ghs-ribbon-logo.svg';
import developAfricaLogo from '../../../assets/develop-africa-logo.jpg';

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
                <div className="about__image-container">
                    <img
                        src={aboutContentImage1}
                        alt="Young students outside of school"
                        className="about__content-image"
                    />
                </div>

            </div>
            <div className="about__quote-container">
                <blockquote className="about__quote">
                    “The system of schooling which occupies ten or more years of education for the majority of children and youth in each society does great good for some and may be very damaging for others. It offers all an opportunity to learn – but does so on its own terms”
                </blockquote>
                <h4 className="about__quote-author">— Benjamin Bloom</h4>
            </div>
            <div className="about__content-section">
                <div className="about__image-container">
                <img
                    src={aboutContentImage2}
                    alt="Children waving outside a car"
                    className="about__content-image"
                />
                </div>
                <div className="about__content-text-container">
                    <h3 className="about__content-subtitle">Gen (Gardner Education Network) Systems Philosophy</h3>
                    <p className="about__content-text">The educational environment should provide some vision of what an educated human being is. The program should provide intimations that real mysteries might be revealed, that new and higher motives of action might be discovered within, and that a different and more human way of life can be harmoniously constructed by what is learned.</p>
                    <p className="about__content-text">In the past, classes taught were oftentimes about an end, and not about a means to further develop understanding of self or others. Gen Hybrid Systems goals are primarily focused on the extent to which the institution would actually support the person’s need for renewed aspiration.</p>
                    <p className="about__content-text">In today’s fast paced technology oriented environment, transparency amongst teacher/students becomes increasingly important. Pupils should be more involved in creating a student centric classroom environment that takes online/offline learning into consideration.</p>
                </div>
            </div>
            <div className="about__milestone-container">
                <h3 className="about__content-subtitle">Key Milestones</h3>
                <p className="about__content-text">We are taking this from a dream to reality!</p>
                <div className="about__milestone-cards">
                    <MilestoneCard
                        date="04/21"
                        event="Groundbreaking of GEN Facility"
                    />
                    <MilestoneCard
                        date="06/21"
                        event="First GEN Curriculum"
                    />
                    <MilestoneCard
                        date="09/21"
                        event="GEN Syllabus of Learning"
                    />
                    <MilestoneCard
                        date="12/21"
                        event="New & Improved Computer Lab"
                    />
                </div>
            </div>
            <div className="about__partner-section">
                <h3 className="about__content-subtitle">Our Partners</h3>
                <div className="about__partners">
                    <div className="about__partner-container">
                        <a href="https://www.developafrica.org/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={developAfricaLogo}
                                alt="some partner logo"
                                className="about__partner-img"
                            />
                        </a>
                        <p className="about__partner-text">Develop Africa strategically empowers lives in Africa by providing educational opportunities and resources.</p>
                    </div>
                    <div className="about__partner-container">
                        <img
                            src={logo}
                            alt="some partner logo"
                            className="about__partner-img"
                        />
                        <p className="about__partner-text">Lorem ipsum dolor sit amet, consect etur adipiscing elit. Accumsan varius vulputate at leo ut integer</p>
                    </div>
                </div>
            </div>


        </SectionLayout>
    );


};

export default AboutContainer;
