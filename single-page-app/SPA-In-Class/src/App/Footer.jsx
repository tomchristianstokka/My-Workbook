import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>My footer</FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`

    background-color: teal;
    border: solid 50px lightgreen;
`;