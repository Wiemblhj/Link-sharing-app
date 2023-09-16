import styled from "styled-components";

const ButtonEditor = ( {onClick} ) => {

  return (
    <StyledButtonEditor onClick={onClick}>
      Back to Editor
    </StyledButtonEditor>
  )
};

export default ButtonEditor;

const StyledButtonEditor = styled.button`
  width: 160px;
  height: 46px;
  border-radius: 8px;
  background: white;
  color: var(--purple, #633CFF);
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
