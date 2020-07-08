import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <div className='nested-wrapper'>
                Page Title
            </div>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
        font-size: 75px;
`;