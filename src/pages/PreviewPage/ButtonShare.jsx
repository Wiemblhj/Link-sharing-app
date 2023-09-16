import styled from "styled-components";

const ButtonShare = ( {onClick} ) => {

  return (
    <StyledButtonShare onClick={onClick}>
      Share Link
    </StyledButtonShare>
  )
};

export default ButtonShare;

const StyledButtonShare = styled.button`
  width: 133px;
  height: 46px;
  border-radius: 8px;
  background: var(--purple, #633CFF);
  color: var(--white, #FFF);
  outline: none;
  font-family: Instrument Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  outline: none;
  border: 1px solid var(--purple, #633CFF);

  &:hover {
    background: var(--purple-hover-color, #BEADFF);
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
    cursor: pointer;
  }
`
