import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FormGroup from '../../../common/FormGroup.jsx';

const ContactForm = () => {

    return (
        <ContactFormStyled className='ContactForm'>
            <form>
                <FormGroup id={ 'userName' } label={ 'Name' }/>
                <FormGroup id={ 'userEmail' } label={ 'Email' }/>
                <FormGroup id={ 'userMessage' } label={ 'Message' }/>
            </form>
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
`;