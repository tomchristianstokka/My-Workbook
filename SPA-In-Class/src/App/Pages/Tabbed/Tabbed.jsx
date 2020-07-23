import React, { useState } from 'react';
import styled from 'styled-components';

/* Components c3 + tab ---------------------------*/
import Tab from './Tab.jsx';
import Section from './Section.jsx';

/* Scripts ---------------------------*/
import { tabItems } from './tabItems.js';

const Tabbed = () => {

    const [chosenTab, chosenTabSet] = useState(tabItems[1]);

    console.log('chosenTab', chosenTab);

    const renderTabs = () => {
        return tabItems.map((tabItem, idx) => {
            return <Tab key={ idx }  tabItem={ tabItem } chosenTabSet={ chosenTabSet } />;
        });
    }

    return (
        <TabbedStyled className='Tabbed'>
            { renderTabs() }
            <Section chosenTab={ chosenTab } />
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    
`;