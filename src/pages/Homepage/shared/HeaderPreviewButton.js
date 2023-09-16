import logoPreview from "../../../assets/images/icon-preview-header.svg";
import styled from "styled-components";

const StyledPreviewButton = styled.div`
  width: 52px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid var(--purple, #633CFF);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(99, 60, 255, 1);
  font-weight: 600;

  &:hover {
    background: var(--light-purple, #EFEBFF);
    cursor: pointer;
  }

  @media (min-width: 772px) {
    width: 114px;
    height: 46px;
  }
`

const HeaderPreviewButton = ( {isImageLarge, handleClickPreview} ) => {
  return (
    <StyledPreviewButton className="preview--button" onClick={handleClickPreview}>
        {isImageLarge ? <p>Preview</p> : <img src={logoPreview} alt="preview"/> }
    </StyledPreviewButton>
  )
}

export default HeaderPreviewButton;