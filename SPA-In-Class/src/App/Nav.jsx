import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../common/mediaQueries.js';

const Nav = () => {
    return (
        <NavStyled>
            <div className='nested-wrapper'>
                <NavLink to='/' exact>Welcome</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/login'>Login</NavLink>
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
        font-size: 20px;
        background-color: #064c4c;
        color: white;

        text-decoration: none;

        margin-bottom: 10px;

        border-radius: 5px;

        width: 100px;
        line-height: 30px;

        @media ${mq.tablet} {
            width: 100px;
            line-height: 50px;
            margin-right: 10px;
            margin-left: 10px;
        }
        @media ${mq.desktop} {
            width: 150px;
        }

        &:hover {
            background-color: #01382f;
        }
        &.active {
            background-color: pink;
        }
    }
`;