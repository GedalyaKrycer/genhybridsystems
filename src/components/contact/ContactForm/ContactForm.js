import React, {useState} from 'react';
import './contactFormStyles.scss';
import InputField from "../../ui/InputField/InputField";




const ContactForm = props => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        clearFields();
    };


    const clearFields = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (

        <div className="mc__form-container">

            {formSubmitted ? (
                <div className="contact-form__confirmation-container">
                    <h3>Thank you for contacting us!</h3>
                    <p>We will review your message and email you back as soon as we can!</p>
                </div>
            ) : (
                <form
                    className="mc__form"
                    onSubmit={(e) => handleSubmit(e)}
                    name={"ghs-contact-form"}
                    method={"POST"}
                    data-netlify="true"
                >
                    <div className="mc__field-container">
                        <input type="hidden" name="form-name" value="ghs-contact-form" />
                        <InputField
                            label="Name"
                            onChangeHandler={setName}
                            type="text"
                            value={name}
                            placeholder="Jane Smith"
                            isRequired
                            name={"name"}
                        />

                        <InputField
                            label="Email"
                            onChangeHandler={setEmail}
                            type="email"
                            value={email}
                            placeholder="your@email.com"
                            isRequired
                            name={"email"}
                        />

                        <InputField
                            label="Message"
                            onChangeHandler={setMessage}
                            type="textarea"
                            value={message}
                            placeholder="How can we help..."
                            isRequired
                            name={"message"}
                        />

                    </div>

                    {/*Always put the email in first in this array for validation reasons*/}
                    <InputField
                        label="send"
                        type="submit"
                        formValues={[email, name, message]}
                    />
                </form>
            )}

        </div>
    )
}

export default ContactForm;
