import styled from "styled-components";
import LinkContext from "../../../context/LinkContext";
import { useContext } from "react";

const LinksSaveButton = ( {numberOfLinks} ) => {
  const { handleClick } = useContext(LinkContext);

 
  return (
    <StyledSaveButton 
    className={`button--save ${numberOfLinks < 1 ? "inactive" : ""}`}
      onClick={handleClick}
      >
        Save
      </StyledSaveButton>
  )
}

export default LinksSaveButton;

export const StyledSaveButton = styled.button`
  height: 46px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  background: var(--purple, #633CFF);
  color: var(--white, #FFF);
  font-size: 16px;
  font-family: Instrument Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.25;
  }

  @media (min-width: 772px) {
    width: 96px;
  }
`