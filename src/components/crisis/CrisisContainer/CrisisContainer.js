import React, {useState} from 'react';
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

    const tabContent = [
        {
            name: 'tab1',
            title: 'Inadequate higher education',
            description: 'Lack of space often means that only junior secondary education is offered.',
            ctaLink: 'https://schoolingforlife.net/sierra-leone/',
            ctaText: "view stats",
            image: crisisImg1
        },
        {
            name: 'tab2',
            title: 'Walking 5-8 miles',
            description: 'Many students have to walk up to 8 miles to get to school.',
            ctaLink: 'https://www.lbbonline.com/news/new-website-scrolls-nine-miles-to-show-how-far-kids-in-sierra-leone-walk-to-school',
            ctaText: "view infographic",
            image: crisisImg2
        },
        {
            name: 'tab3',
            title: '“Love trades" for school',
            description: 'Young girls are forced to sell their bodies for rides and to pay for school.',
            ctaLink: 'https://www.deccanchronicle.com/world/africa/190416/sierra-leone-girls-as-young-as-14-forced-to-sell-body-to-fund-schooling.html',
            ctaText: "testimony",
            image: crisisImg3
        },
        {
            name: 'tab4',
            title: 'Education disrupted by war',
            description: 'Children who were Civil War victims are often forced to rely on criminal behavior to survive.',
            ctaLink: 'https://www.thenewhumanitarian.org/fr/node/225020',
            ctaText: "testimony",
            image: crisisImg4
        },
        {
            name: 'tab5',
            title: 'Minimal computer access',
            description: 'Students often have introductory technology classes without access to a computer.',
            ctaLink: 'https://firstmonday.org/ojs/index.php/fm/article/view/940/862',
            ctaText: "read article",
            image: crisisImg5
        },

    ]


    const tabHandler = (tabName) => {
        setCurrentTab(tabName);
    }



    return (
        <SectionLayout id="crisis" customClass="crisis__container">
            {
                tabContent.map((img, i) => img.name === currentTab ?   <TabImage
                            key={img.name + (i * 3)}
                            active={currentTab}
                            image={img.image}
                        /> : null)
            }
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
                            />
                        })
                    }

                </ul>
            </div>
        </SectionLayout>
    );


};

export default CrisisContainer;
