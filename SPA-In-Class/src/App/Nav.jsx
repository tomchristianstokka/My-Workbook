import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyled>
            <div className='nested-wrapper'>
                <a href='/'>Welcome</a>
                <a href='/services'>Services</a>
                <a href='/contact'>Contact</a>
                <a href='/login'>Login</a>
            </div>   
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
    color: white;

    text-align: center;

    a {
        display: inline-block;

        text-align: center;
        line-height: 50px;
        font-size: 20px;
        background-color: #064c4c;
        color: white;

        text-decoration: none;

        width: 150px;
        margin-right: 10px;
        margin-left: 10px;

        &:hover {
            background-color: #01382f;
        }
    }

`;