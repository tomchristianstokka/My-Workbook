import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import GalleryItem from './GalleryItem';

const Gallery = ({ services, currCategory }) => {

    console.log('Gallery: ', services, currCategory);

    const renderGallery = () => {
        return services.packages.map((item, idx) => {
            return <GalleryItem key={ idx } item={ item } />
        });
    }

    return (
        <GalleryStyled className='Gallery'>
            { renderGallery() }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    
`;