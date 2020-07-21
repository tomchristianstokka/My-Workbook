import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

const Footer = () => {

    // Single line comment
    /*
        Multi line comment
        more than one line
        see
    */

    const myVariable = 'Hey wassup'
    const anotherOne = 123;
    console.log(myVariable, anotherOne);

    const random = () => {
        // Actions to execute
        console.log('Executing random');
    }

    random();

    return (
        <FooterStyled>
            <div className='nested-wrapper'>
                Footer
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: teal;
    color: white;

    @media ${mq.tablet} {
        background-color: orange;
    }
    @media ${mq.desktop} {
        background-color: purple;
    }
`;