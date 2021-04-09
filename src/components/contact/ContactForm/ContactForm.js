import React, {useState} from 'react';
import './contactFormStyles.scss';
import InputField from "../../ui/InputField/InputField";




const ContactForm = props => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    return (

        <div className="mc__form-container">

                <form
                    className="mc__form"
                    name="ghs-contact-form"
                    method="post"
                >
                    <div className="mc__field-container">
                        <input type="hidden" name="form-name" value="ghs-contact-form"/>
                        <InputField
                            label="Name"
                            onChangeHandler={setName}
                            type="text"
                            value={name}
                            placeholder="Jane Smith"
                            isRequired
                            name="name"
                        />

                        <InputField
                            label="Email"
                            onChangeHandler={setEmail}
                            type="email"
                            value={email}
                            placeholder="your@email.com"
                            isRequired
                            name="email"
                        />

                        <InputField
                            label="Message"
                            onChangeHandler={setMessage}
                            type="textarea"
                            value={message}
                            placeholder="How can we help..."
                            isRequired
                            name="message"
                        />

                    </div>

                    {/*Always put the email in first in this array for validation reasons*/}
                    <InputField
                        label="send"
                        type="submit"
                        formValues={[email, name, message]}
                    />
                </form>
        </div>
    )
}

export default ContactForm;
