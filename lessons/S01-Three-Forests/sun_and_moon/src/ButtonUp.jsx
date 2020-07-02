import React from 'react';

const ButtonUp = ( {onClick} ) => {
    return (
        <img onClick={ onClick } src="/images/up.png" alt="up"/>
    );
}

export default ButtonUp;