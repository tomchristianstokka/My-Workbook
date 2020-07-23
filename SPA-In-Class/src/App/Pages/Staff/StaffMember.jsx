import React from 'react';
import styled from 'styled-components';

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } alt={ member.name } />
            <div className='title'>{ member.name }</div>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
`;