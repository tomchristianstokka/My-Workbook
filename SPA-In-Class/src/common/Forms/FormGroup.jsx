import React from 'react';
import styled from 'styled-components';

import Input from './Input.jsx';
import Textarea from './Textarea.jsx';

const FormGroup = ({formField, onChange}) => {

    const Control = (formField.inputType === 'textarea')? Textarea : Input;

    return (
        <FormGroupStyled className='FormGroup'>
            <label htmlFor={ formField.id }>{formField.label}:</label>
            <Control formField={ formField } onChange={ onChange} />
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    
`;