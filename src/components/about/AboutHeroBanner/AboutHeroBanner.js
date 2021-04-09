import React, {useEffect, useState} from 'react';
import './aboutHeroBannerStyles.scss';
import heroIcon from '../../../assets/school-icon.svg';
import useWindowDimensions from "../../../utils/useWindowDimensions";

const AboutHeroBanner = props => {

    const {width} = useWindowDimensions();
    const [offsetY, setOffsetY] = useState(0);
    const [desktopView, setDesktopView] = useState(true);

    useEffect(() => {
        if(width > 676) {
            setDesktopView(true);
        } else {
            setDesktopView(false);
        }
    }, [width])

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return(
        <section className="about-hero__container" id="about">
            <img
                src={heroIcon}
                className="about-hero__icon"
                style={{
                    opacity: desktopView && `${offsetY / 1800}`
                }}
                alt="Icon of school"
            />
            <h2
                className="about-hero__title"
                style={{
                    opacity: desktopView && `${offsetY / 2000}`
                }}
            >
                We are building a <span className="g__text-emphasis">hybrid-learning school </span>
                to fight this crisis.
            </h2>
            <div
                className="about-hero__img"
                style={{
                    transform: desktopView && `translateY(${offsetY * 0.02}px)`,
                    opacity: desktopView && `${offsetY / 1800}`
                }}
            />
        </section>
    );


};

export default AboutHeroBanner;
