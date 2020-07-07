import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <h1>Page Title</h1>
            <h2>Subtitle</h2>
            <h3>Sub Sub Title</h3>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: orange;
        font-size: 75px;
    }
    h2 {
        background-color: yellow;
        padding: 20px;
        border: solid 5px blue;
    }
    h3 {
        background-color: teal;
        border: solid 10px red;
    }
`;