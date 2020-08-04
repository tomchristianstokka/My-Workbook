import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import GalleryItem from './GalleryItem.jsx';

const Gallery = ({ services, currCategory }) => {

    console.log('Gallery: ', services, currCategory);

    const renderGallery = () => {
        return services.packages
            .filter((item, idx) => {
                return (currCategory === 'All' || item.category === currCategory);
            })
            .map((item, idx) => {
            return <GalleryItem key={ idx } item={ item } />;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;