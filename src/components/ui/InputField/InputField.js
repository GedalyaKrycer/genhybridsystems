import React from 'react';
import './inputFieldStyles.scss';

const InputField = props => {

    //Checks if all the fields are filled and if an @ sign is used in the email field
    const validateInput = values => {

        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            console.log("True was hit")
            return true
        } else {
            console.log("FALSE was hit")
            return false
        }


    }
    if (props.type === "submit") {
        console.log("props.formValues")
        console.log(props.formValues[0].indexOf("@") === -1)
        return (
            <input
                className='primaryBtn primaryBtn--big g__justify-self-center'
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
        )
    } else if (props.type === "textarea") {
        return (
            <label className="inputField__label">
                {props.label}
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    rows={7}
                    name={props.name}
                />
            </label>
        );
    } else {
        return (
            <label className="inputField__label">
                {props.label}
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    name={props.name}
                />
            </label>
        );
    }


};

export default React.memo(InputField);
