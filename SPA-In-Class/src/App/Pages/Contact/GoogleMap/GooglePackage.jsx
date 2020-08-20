import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

/* Scripts ---------------------------*/
import { googleData } from './googleData.js';

/* Components ---------------------------*/
import HouseMarker from './HouseMarker.jsx';

const GooglePackage = () => {

    return (
        <GooglePackageStyled className='GooglePackage'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleData.googleApiKey }}
                defaultCenter={ googleData.coords }
                defaultZoom={ 14 }
                initialCenter
            >
                <HouseMarker
                    lat={googleData.coords.lat}
                    lng={googleData.coords.lng}
                />
            </GoogleMapReact> 
        </GooglePackageStyled>
    );
}

export default GooglePackage;

const GooglePackageStyled = styled.div`
    width: 100%;
    height: 600px;

    background-color: maroon;
    margin: 20px 0px;
    
`;