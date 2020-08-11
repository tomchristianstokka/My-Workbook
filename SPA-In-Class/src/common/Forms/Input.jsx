import React from 'react';
import styled from 'styled-components';

const Input = ({formField, onChange}) => {

    const handleOnChange = (event) => {
        onChange(event, formField);
    }

    return (
        <InputStyled className='Control Input'>
            <input 
                id={ formField.id }
                name={ formField.id }
                type={ formField.inputType }
                onChange= { handleOnChange }
                value= {formField.value }
            />
        </InputStyled>
    );
}

export default Input;

const InputStyled = styled.div`
    
`;