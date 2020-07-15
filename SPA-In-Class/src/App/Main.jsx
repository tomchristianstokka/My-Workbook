import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';

const Main = () => {
    return (
        <MainStyled>
            <Switch>
                <Route path='/login' component={ Login } />
                <Route path='/contact' component={ Contact } />
                <Route path='/services' component={ Services } />
                <Route path='/' component={ Home } />
            </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    padding: 50px;
    font-size: 75px;
`;