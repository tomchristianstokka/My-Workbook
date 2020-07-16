import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet] = useState(false);

    const toggleMenu = () => {
        console.log('You cliked the hamburger', showMenu);
        showMenuSet(!showMenu);
    }

    // useEffect is for lifecycle events, like component mounted
    // When we pass empty [] it triggers component mounted
    useEffect(()=>{
        console.log('I have mounted');

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`);
            console.log(isItMobile.matches);

            showMenuSet(!isItMobile.matches);
        }

        // On Load / Component Mounts
        handleWindowSizeChange();

        // Every Time Window is resized
        window.addEventListener('resize', handleWindowSizeChange);

        // Clean Up our Listeners on dismount
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    }, []); // straight braces empty = component mounted

    return (
        <NavStyled>
            <div className='nested-wrapper'>
                <div 
                    className='hamburger'
                    onClick={ toggleMenu }
                >
                    <FontAwesomeIcon icon={ faBars } />
                </div>
                {
                    showMenu &&
                    <div className='links'>
                        <NavLink to='/' exact>Welcome</NavLink>
                        <NavLink to='/services'>Services</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                }
            </div>   
        </NavStyled>
    );
}
 
export default Nav;

const NavStyled = styled.nav`
    background-color: teal;
    color: white;
    text-align: center;

    .hamburger {
        position: absolute;
        right: 20px;
        top: 20px;

        svg {
            color: red;
            width: 40px;
            height: auto;
        }  

        display: block;

        @media ${mq.tablet} {
            display: none;
        }
    }

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