import React from 'react';
import { inputStyle, labelStyle } from '../common/style';

const InputText = ({ contClassName, register, name, message, label, rule, saving = false, ...rest}) => {
    
    return (
        <div className={contClassName + " form-group"}>
            <label htmlFor={name} className="form-label" style={labelStyle} >{label}</label>
            <input {...register(name, rule)} id={name} {...rest} className="form-control" style={inputStyle} readOnly={saving}/>
            {message}
        </div>
    );
}

export default InputText;
