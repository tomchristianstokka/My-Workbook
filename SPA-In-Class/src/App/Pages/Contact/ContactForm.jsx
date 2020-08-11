import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FormGroup from '../../../common/Forms/FormGroup.jsx';

const formFields = {
    nameField: {
        id: 'userName',
        label: 'Name',
        inputType: 'text',
        value: '',
    },
    emailField: {
        id: 'userEmail',
        label: 'Email',
        inputType: 'email',
        value: '',
    },
    messageField: {
        id: 'userMessage',
        label: 'Message',
        inputType: 'textarea',
        value: '',
    },
}

const ContactForm = () => {

    const [userName, userNameUpdate] = useState(formFields.nameField);
    const [userEmail, userEmailUpdate] = useState(formFields.emailField);
    const [userMessage, userMessageUpdate] = useState(formFields.messageField);

    const handleOnChange = (event, formField) => {
        console.log(event.target.value, formField);

        const newField = {
            ...formField,
            value: event.target.value,
        }

        if (formField.id === 'userName') {
            userNameUpdate(newField);
        }
        if (formField.id === 'userEmail') {
            userEmailUpdate(newField);
        }
        if (formField.id === 'userMessage') {
            userMessageUpdate(newField);
        }
    }

    return (
        <ContactFormStyled className='ContactForm'>
            <form>
                <FormGroup 
                    formField={ userName }       
                    onChange={ handleOnChange }
                />
                <FormGroup 
                    formField={ userEmail }      
                    onChange={ handleOnChange }
                />
                <FormGroup 
                    formField={ userMessage }    
                    onChange={ handleOnChange }
                />
            </form>
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
`;