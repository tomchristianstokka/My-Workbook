import React from 'react';
import styled from 'styled-components';

const Section = ({chosenTab}) => {

    return (
        <SectionStyled className='Section'>
            <img src={ chosenTab.image } alt={ chosenTab.title }/>
            <h2>{ chosenTab.title }</h2>
            <div dangerouslySetInnerHTML={ {__html: chosenTab.text } } />
        </SectionStyled>
    );
}

export default Section;

const SectionStyled = styled.div`
    background-color: teal;
    padding: 20px;
`;