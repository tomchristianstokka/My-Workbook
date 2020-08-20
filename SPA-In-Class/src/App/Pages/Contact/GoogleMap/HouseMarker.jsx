import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome,
} from '@fortawesome/free-solid-svg-icons';

const HouseMarker = () => {

    return (
        <HouseMarkerStyled className='HouseMarker'>
            <div className="icon">
                <FontAwesomeIcon icon={ faHome } />
            </div>
            <h1>HOME</h1>
        </HouseMarkerStyled>
    );
}

export default HouseMarker;

const HouseMarkerStyled = styled.div`
    &.HouseMarker {
        text-align: center;
        color: maroon;

        width: 200px;

        /* Center Position on map marker coordinates. */
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);

        .icon {
            margin: auto;
            width: 50px;
            height: 50px;
            text-align: center;

            svg {
                width: 100%;
                height: auto;
            }
        }

        h1 {
            margin: 0;
            font-size: 16px;
        }
    }
`;