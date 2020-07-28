import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import FilterNavButton from './FilterNavButton.jsx';

const FilterNav = ({ services, currCategory }) => {

    console.log('FilterNav: ', services, currCategory);

    const renderButtons = () => {
        return services.categories.map((name, idx) => {
            return <FilterNavButton key={ idx } name={ name } />
        });
    }

    return (
        <FilterNavStyled className='FilterNav'>
            { renderButtons() }
        </FilterNavStyled>
    );
}

export default FilterNav;

const FilterNavStyled = styled.div`
    
`;