import React from 'react';
import './sectionLayoutStyles.scss';

const SectionLayout = props => {


return (
    <section className="section-layout" id={props.id && props.id}>
        <div />
        <div className={props.customClass}>
            {props.children}
        </div>
    </section>
)

};

export default SectionLayout;
