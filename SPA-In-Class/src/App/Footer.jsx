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

    const myVariable = 'I went to the park'
    const anotherOne = 123;
    console.log(myVariable, anotherOne);

    const timbuktu = () => {
        // Actions to execute
        console.log('Executing timbuktu');
    }

    timbuktu();

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