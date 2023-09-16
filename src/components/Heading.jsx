import devlinksLogoSmall from "../assets/images/logo-devlinks-small.svg";
import devlinksLogoLarge from "../assets/images/logo-devlinks-large.svg";
import HeaderLinksButton from "../pages/Homepage/shared/HeaderLinksButton";
import HeaderProfileButton from "../pages/Homepage/shared/HeaderProfileButton";
import HeaderPreviewButton from "../pages/Homepage/shared/HeaderPreviewButton";
import { useState } from "react";
import styled from "styled-components";

function Heading( {isImageLarge, handleClickPreview, handleClickOnHeaderButtons} ) {
  const [selectedIcon, setSelectedIcon] = useState("LinkLogo")

  const handleClick = (name, page) => {
    setSelectedIcon(name)
    handleClickOnHeaderButtons(page)
  }

  return (
    <StyledHeaderComponent>
        <div className="header--container">
            <img src={isImageLarge ? devlinksLogoLarge : devlinksLogoSmall} alt="devlinks logo"/>
            <div className="header--panel">
              <HeaderLinksButton 
                isImageLarge={isImageLarge} 
                handleClick={handleClick} 
                selectedIcon={selectedIcon}
              />
              <HeaderProfileButton 
                isImageLarge={isImageLarge} 
                handleClick={handleClick} 
                selectedIcon={selectedIcon}
              />
            </div>
            <HeaderPreviewButton 
              isImageLarge={isImageLarge}
              handleClickPreview={handleClickPreview}
            />
        </div>
    </StyledHeaderComponent>
  )
}

export default Heading

export const StyledHeaderComponent = styled.header`
    min-width: 375px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white, #FFF);
    border-radius: 12px;
    padding: 16px;

    .header--container {
      min-width: 335px;
      height: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header--panel {
      display: flex;
    }

    @media (min-width: 772px) {
      min-width: 720px;
      height: 78px;
      border-radius: 12px;
      padding: 16px;
      margin: 0px 24px 0px 24px;
      margin-top: 24px;

      .header--container {
        min-width: 680px;
        height: 46px;
      }
    }

    @media (min-width: 1280px) {
      width: 1392px;
      height: 78px;
      border-radius: 12px;

      .header--container {
        min-width: 1200px;
        max-width: 1352px;
        height: 46px;
      }
    }
`