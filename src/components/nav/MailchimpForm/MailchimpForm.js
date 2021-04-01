import React from 'react';
import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import PrimaryCTAButton from "../../ui/PrimaryCTAButton/PrimaryCTAButton";

const CustomForm = ({ status, message, onValidated }) => {
    let email, firstName, lastName;
    const submit = () =>
        email &&
        firstName &&
        lastName &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value,
            MERGE1: firstName.value,
            MERGE2: lastName.value,
        });


    return (
        <div
            className="mc__container"
        >
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && (
                <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <input
                style={{ fontSize: "2em", padding: 5 }}
                ref={node => (firstName = node)}
                type="text"
                placeholder="Your first name"
            />
            <br />
            <input
                style={{ fontSize: "2em", padding: 5 }}
                ref={node => (lastName = node)}
                type="text"
                placeholder="Your last name"
            />
            <br />
            <input
                style={{ fontSize: "2em", padding: 5 }}
                ref={node => (email = node)}
                type="email"
                placeholder="Your email"
                autoCapitalize="off"
                autoCorrect="off"
            />
            <br />
            <PrimaryCTAButton
                handleClick={submit}
                label="subscribe"
                size="big"
            />
        </div>
    );
};


const MailchimpForm = props => {
    const url = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (

        <div>
            <h3>Join our email list for future updates.</h3>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

    )
}

export default MailchimpForm;
