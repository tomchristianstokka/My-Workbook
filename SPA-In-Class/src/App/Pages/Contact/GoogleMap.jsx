import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import GooglePackage from './GoogleMap/GooglePackage.jsx';

const GoogleMap = () => {

    return (
        <GoogleMapStyled className='GoogleMap'>
            <GooglePackage />
        </GoogleMapStyled>
    );
}

export default GoogleMap;

const GoogleMapStyled = styled.div`
    
`;