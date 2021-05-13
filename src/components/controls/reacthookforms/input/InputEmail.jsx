import React from 'react';
import { regEmail } from '../../../../js/validations/regular-expresions';
import { inputStyle, labelStyle } from '../common/style';

const InputEmail = ({ contClassName, register, name, message, label, rule, saving = false, ...rest }) => {

    return (
        <div className={contClassName + " form-group"}>
            <label htmlFor={name} className="form-label" style={labelStyle} >{label}</label>
            <input type="text" {...register(name, {
                ...rule, pattern: {
                    value: regEmail,
                    message: 'Email no válido' // JS only: <p>error message</p> TS only support string
                }
            })} id={name} {...rest} className="form-control" style={inputStyle} readOnly={saving} />
            {message}
        </div>
    );
}

export default InputEmail;
