// These are libraries
import React, { useState } from 'react';

// Import my Custom components
import SunAndMoon from './SunAndMoon.jsx';
import Trinity from './Trinity.jsx';
import ButtonUp from './ButtonUp.jsx';
import ButtonDown from './ButtonDown.jsx';

// Create a component
const App = () => {

const [whichImage, whichImageSet] = useState("/images/moon.png");

const handleDown = () => {
    whichImageSet("images/moon.png");
}

const handleUp = () => {
    whichImageSet("/images/sun.png");
}

    return (
        <div>
            App has changed
            <SunAndMoon whichImage={ whichImage } />

            <ButtonUp           onClick={ handleDown } />
            <ButtonDown         onClick={ handleUp } />
            
            <Trinity />
            </div>
    );
}

// export that compoenent to share
export default App;