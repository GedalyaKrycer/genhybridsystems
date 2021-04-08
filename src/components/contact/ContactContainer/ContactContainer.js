import React, {useState, useEffect} from 'react';
import './contactContainerStyles.scss';
import logo from '../../../assets/ghs-logo-shadow.png';
import SectionLayout from "../../ui/SectionLayout/SectionLayout";
import SocialMediaIcon from "../../ui/SocialMediaIcon/SocialMediaIcon";




const ContactContainer = props => {


    return (



        <SectionLayout customClass="contact__container">
            <img src={logo} alt="Gen Hybrid Systems Logo" className="contact__logo"/>
            <div className="contact__connect-container">
                <h2 className="contact__title contact__title--left">Connect <span className="g__text-emphasis">with us</span></h2>
                <div className="contact__contact-group">
                    <h3>phone</h3>
                    <a href="tel:123456790">(123) 456–7890</a>
                </div>
                <div className="contact__contact-group">
                    <h3>email</h3>
                    <a href="mailto:gedhybridsystems@gmail.com">gedhybridsystems@gmail.com</a>
                </div>
                <div className="contact__contact-group">
                    <h3>follow on social</h3>
                    <SocialMediaIcon
                        type={"youtube"}
                        location={"contact"}
                        theme={"light"}
                        disable={false}
                    />
                    <SocialMediaIcon
                        type={"facebook"}
                        location={"contact"}
                        theme={"light"}
                        disable={false}
                    />
                    <SocialMediaIcon
                        type={"instagram"}
                        location={"contact"}
                        theme={"light"}
                        disable={false}
                    />
                    <SocialMediaIcon
                        type={"linkedin"}
                        location={"contact"}
                        theme={"light"}
                        disable={false}
                    />
                    <SocialMediaIcon
                        type={"twitter"}
                        location={"contact"}
                        theme={"light"}
                        disable={false}
                    />
                    <SocialMediaIcon
                        type={"ticktock"}
                        location={"contact"}
                        theme={"light"}
                        disable={false}
                    />
                </div>
            </div>
            <div className="contact__form-container">
                <h2 className="contact__title contact__title--right">Contact <span className="g__text-emphasis">our team</span></h2>

            </div>

        </SectionLayout>

    )
}

export default ContactContainer;
