import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({name, currCategory, currCategorySet }) => {

    console.log('FilterNavButton currCategory', currCategory);

    const changeCategory = () => {
        currCategorySet(name);
    }

    const theClassName = (name === currCategory) ? 'FilterNavButton active': 'FilterNavButton';

    return (
        <FilterNavButtonStyled 
            className={ theClassName }
            onClick={ changeCategory }
        >
            { name }
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    display: inline-block;
    padding: 10px 20px;
    background-color: #128200;
    color: white;
    margin: 10px; 
    border-radius: 5px;

    cursor: pointer;

    &:hover {
        background-color: #3e6f36;
    }

    &:active {
        background-color: maroon;
    }
`;