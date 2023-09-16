import React from 'react'
import styled from "styled-components";

const PurpleBackground = () => {
  return (
    <StyledPurpleBackground></StyledPurpleBackground>
  )
}

export default PurpleBackground

const StyledPurpleBackground = styled.div`
    @media (min-width: 772px) {
   
  
        width: 100%;
        height: 287px;
        border-radius: 0px 0px 32px 32px;
        background: var(--purple, #633CFF);
    }
`