import styled from "styled-components";

const AddNewLinkButton = ( {addLink} ) => {

  return (
    <StyledNewLinkButton onClick={addLink} className="button--addlink">+ Add new link</StyledNewLinkButton>
  )
}

export default AddNewLinkButton

const StyledNewLinkButton = styled.button`
  width: 295px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--purple, #633CFF);
  color: var(--purple, #633CFF);
  font-size: 16px;
  font-family: Instrument Sans;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  gap: 8px;
  background: white;
  margin-top: 40px;

  &:hover {
    cursor: pointer;
    background: var(--light-purple, #EFEBFF);
  }

  @media (min-width: 772px) {
    width: 100%;
  }
`