import React, { useState } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Scripts ---------------------------*/
import API from '../../common/axios.js';

/* Components ---------------------------*/

import Button from '../../common/Forms/Button.jsx';
import FormGroup from '../../common/Forms/FormGroup.jsx';


const formFields = {
    nameField: {
        id: 'userName',
        label: 'Name',
        inputType: 'text',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
    passwordField: {
        id: 'userPassword',
        label: 'Password',
        inputType: 'password',
        value: '',
        validate: {
            required: true,
            valid: true,
            message: '',
        }
    },
}

const Login = () => {

    const [userName, userNameUpdate] = useState(formFields.nameField);
    const [userPassword, userPasswordUpdate] = useState(formFields.passwordField);

    const handleOnChange = (event, formField) => {
        // console.log(event.target.value, formField);

        const newField = {
            ...formField,
            value: event.target.value,
        }

        if (newField.validate.required === true) {
            console.log('Validating: ', newField.label);
        }

        if (newField.value.lenght < 4) {
            // Let them know there is an error
            newField.validate.valid = false;
            newField.validate.message = `You forgot to fill out ${newField.label} field.`;
        } else {
            // Clear any errors
            newField.validate.valid = true;
            newField.validate.message = ``;
        }

        if (formField.id === 'userName') {
            userNameUpdate(newField);
        }
        if (formField.id === 'userPassword') {
            userPasswordUpdate(newField);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Captured Login, we will take it from here');

        if (userName.validate.valid === true && userPassword.validate.valid === true) {
            console.log('Valid Login form');

            // .. AJAX goes here: aka AXIOS
            const postData = {
                userName: userName,
                userPassword: userPassword,
            }

            API.post('/Login', postData).then((result) => {
                console.log('result', result);
            });
        }
    }



    return (
        <LoginStyled className='Login'>
            <Helmet>
                <title>Login :: SPA App</title>
            </Helmet>
            <form onSubmit={ handleFormSubmit }>
                <FormGroup
                    formField={ userName }
                    onChange={ handleOnChange }
                />
                <FormGroup
                    formField={ userPassword }
                    onChange= { handleOnChange }
                />
                <Button type='submit'>Login</Button>
            </form>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;