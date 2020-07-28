import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({name}) => {

    return (
        <FilterNavButtonStyled className='FilterNavButton'>
            { name }
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    
`;