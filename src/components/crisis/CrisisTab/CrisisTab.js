import React, {useEffect, useRef, useState} from 'react';
import './CrisisTabStyle.scss';

const CrisisTab = props => {

    const [tabHeight, setTabHeight] = useState(0);
    const content = useRef(null);

    const {name, active, ctaText, tabHandler, description, ctaLink} = props;

    useEffect(() => {

        if (name === active) {
            setTabHeight(content.current.scrollHeight);
        } else {
            setTabHeight(0);
        }

    }, [name, active])

    return (

        <li className="crisis-tab">
            <button
                onClick={tabHandler}
                className="crisis-tab__btn"
                style={{ paddingBottom: name === active ? "8px" : "25px" }}
                aria-disabled={name === active}
                disabled={name === active}
            >
                <h4 className={`crisis-tab__title ${name === active ? "crisis-tab__title--active" : "crisis-tab__title--default"}`}>{props.title}</h4>
            </button>
            <div
                ref={content}
                className="crisis-tab__content"
                style={{
                    maxHeight: tabHeight + "px",
                    visibility: name === active ? 'visible' : 'hidden'
                }}
                aria-expanded={name === active}
            >
                <p className="crisis-tab__description">{description}</p>
                <a
                    href={ctaLink}
                    className="crisis-tab__cta"
                    rel="noreferrer noopener"
                    target="_blank"
                >{ctaText} <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.10211 1.23678L5.69669 0.677582C5.94844 0.440806 6.35554 0.440806 6.60462 0.677582L11.8112 5.57179C12.0629 5.80856 12.0629 6.19144 11.8112 6.42569L6.60462 11.3224C6.35286 11.5592 5.94577 11.5592 5.69669 11.3224L5.10211 10.7632C4.84767 10.5239 4.85303 10.1335 5.11282 9.89924L8.34014 7.00756H0.642785C0.286575 7.00756 0 6.73804 0 6.40302V5.59698C0 5.26196 0.286575 4.99244 0.642785 4.99244H8.34014L5.11282 2.10076C4.85035 1.8665 4.845 1.47607 5.10211 1.23678Z"/>
                </svg>
                </a>
            </div>
        </li>

    );


};

export default CrisisTab;
