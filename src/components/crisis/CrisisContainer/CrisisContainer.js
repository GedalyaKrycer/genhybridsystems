import React, {useEffect, useRef, useState} from 'react';
import './CrisisContainerStyle.scss';
import SectionLayout from "../../ui/SectionLayout/SectionLayout";
import crisisImg1 from "../../../assets/crisis-images/crowded-class.jpg";
import crisisImg2 from "../../../assets/crisis-images/walk-to-school.jpg";
import crisisImg3 from "../../../assets/crisis-images/rides-to-school.jpg";
import crisisImg4 from "../../../assets/crisis-images/left-alone.jpg";
import crisisImg5 from "../../../assets/crisis-images/minimal-computer-access.jpg";
import CrisisTab from "../CrisisTab/CrisisTab";
import TabImage from "../TabImage/TabImage";

const CrisisContainer = props => {

    const [currentTab, setCurrentTab] = useState('tab1');
    const [tabImage, setTabImage] = useState(crisisImg1);
    const [tabHeight, setTabHeight] = useState("0px");
    const content = useRef(null);

    const tabContent = [
        {
            name: 'tab1',
            title: 'Inadequate higher education',
            description: 'Lack of space often means that only junior secondary education is offered.',
            ctaLink: 'https://en.wikipedia.org/wiki/Sierra_Leone',
            ctaText: "learn more",
            image: crisisImg1
        },
        {
            name: 'tab2',
            title: 'Walking 5-8 miles',
            description: 'Many students have to walk up to 8 miles to get to school.',
            ctaLink: 'https://en.wikipedia.org/wiki/Sierra_Leone',
            ctaText: "learn more",
            image: crisisImg2
        },
        {
            name: 'tab3',
            title: '“Love” trades for rides',
            description: 'Young girls are forced to trade their bodies for rides to school.',
            ctaLink: 'https://en.wikipedia.org/wiki/Sierra_Leone',
            ctaText: "learn more",
            image: crisisImg3
        },
        {
            name: 'tab4',
            title: 'Lack of supervision',
            description: 'Students forced to live unsupervised in order to be closer to a school, are more susceptible to criminal behavior.',
            ctaLink: 'https://en.wikipedia.org/wiki/Sierra_Leone',
            ctaText: "learn more",
            image: crisisImg4
        },
        {
            name: 'tab5',
            title: 'Minimal computer access',
            description: 'Students often have introductory technology classes without access to a computer. ',
            ctaLink: 'https://en.wikipedia.org/wiki/Sierra_Leone',
            ctaText: "learn more",
            image: crisisImg5
        },

    ]

    useEffect(() => {
        setTabHeight(`${content.current.scrollHeight}px`)
    }, [])


    const tabHandler = (tabName) => {
        setCurrentTab(tabName);

        const newImage = tabContent.filter(img => img.name === tabName)

        console.log("tabname", tabName);
        console.log("newImage", newImage[0].name);

        setTabImage(newImage[0].image);

        setTabHeight(`${content.current.scrollHeight}px`)


    }


    return (
        <SectionLayout id="crisis" customClass="crisis__container">
            <TabImage image={tabImage} />
            <div className="crisis__content-column">
                <h2 className="crisis__headline">There is a <span className="g__text-emphasis">crisis </span>in Sierra Leone </h2>
                <ul className="crisis__tab-container">
                    {
                        tabContent.map((tab, i) => {
                            return <CrisisTab
                                key={tab.name + (i * 2)}
                                tabHandler={() => tabHandler(tab.name)}
                                active={currentTab}
                                name={tab.name}
                                title={tab.title}
                                description={tab.description}
                                ctaText={tab.ctaText}
                                ctaLink={tab.ctaLink}
                                content={content}
                                height={tabHeight}

                            />
                        })
                    }

                </ul>
            </div>
        </SectionLayout>
    );


};

export default CrisisContainer;
