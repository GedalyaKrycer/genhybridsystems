import React, {useState, useEffect, useCallback} from 'react';
import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import PrimaryCTAButton from "../../ui/PrimaryCTAButton/PrimaryCTAButton";
import { useGHStContext } from '../../../utils/ContextProvider';
import InputField from "../../ui/InputField/InputField";

const CustomForm = ({ status, message, onValidated }) => {


    const {modalOpen, setModalOpen} = useGHStContext();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });

    }

    useEffect(() => {
        if(status === "success") clearFields();
        if(modalOpen && status === "success") clearFields();
    }, [status, modalOpen])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }


    return (
        <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mc__title">
                {status === "success" ? "Success!" :
                    "Join our email list for future updates."}
            </h3>

            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status !== "success" ? (
                <div className="mc__field-container">
                    <InputField
                        label="First Name"
                        onChangeHandler={setFirstName}
                        type="text"
                        value={firstName}
                        placeholder="Jane"
                        isRequired
                    />

                    <InputField
                        label="Last Name"
                        onChangeHandler={setLastName}
                        type="text"
                        value={lastName}
                        placeholder="Doe"
                        isRequired
                    />

                    <InputField
                        label="Email"
                        onChangeHandler={setEmail}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                        isRequired
                    />

                </div>
            ) : null}

            {/*Close button appears if form was successfully sent*/}
            {
                status === 'success' ? <PrimaryCTAButton
                    handleClick={() => setModalOpen(false)}
                    label="close"
                    size="big"
                    customClass="g__justify-self-center"
                /> : <InputField
                    label="subscribe"
                    type="submit"
                    formValues={[firstName, lastName, email]}
                />

            }
        </form>
    );
};


const MailchimpForm = props => {
    const url = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (

        <div className="mc__form-container">
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
