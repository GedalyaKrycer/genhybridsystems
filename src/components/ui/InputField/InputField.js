import React from 'react';
import './inputFieldStyles.scss';

const InputField = props => {



    if (props.type === "submit") {
        return (
            <input
                className='primaryBtn primaryBtn--big g__justify-self-center'
                type='submit'
                value={props.label}
                disabled={props.formValues && props.formValues.some(f => f === "")}
            />
        )
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
                />
            </label>
        );
    }


};

export default React.memo(InputField);
