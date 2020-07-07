import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>
            <div className='nested-wrapper'>
                My footer
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: teal;
    color: white;
`;