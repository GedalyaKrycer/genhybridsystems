import React from 'react';
import './sectionLayoutStyles.scss';

const SectionLayout = props => {


return (
    <section className="section-layout">
        <div />
        <div>
            {props.children}
        </div>
    </section>
)

};

export default SectionLayout;
