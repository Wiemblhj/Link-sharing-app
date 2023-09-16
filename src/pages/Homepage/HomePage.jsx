import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LinksSection from "./links/LinksSection";
import ProfileDetailsSection from "./profile/ProfileDetailsSection";
import PhoneIllustration from "./shared/PhoneIllustration";
import Heading from "../../components/Heading";
import styled from "styled-components";

const HomePage = () => {
    const [isImageLarge, setIsImageLarge] = useState(false);
    const [windowWidth, setWindowWiidth] = useState(window.innerWidth);
    const [displayPhone, setDisplayPhone] = useState(false);
    const [buttonPressed, setButtonPressed] = useState("Links");

    const navigate = useNavigate();

    const handleClickOnHeaderButtons = (page) => {
        setButtonPressed(page)
    };

    const handleClickOnPreviewButton = () => {
      navigate("/preview");
  };

    useEffect(() => {
      windowWidth > 1279 ? setDisplayPhone(true) : setDisplayPhone(false);
    }, [windowWidth]);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWiidth(window.innerWidth);
  
      };
  
      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize)
      };
  
    })
  
    useEffect(() => {
     windowWidth > 771 ? setIsImageLarge(true) : setIsImageLarge(false); 
   
    }, [windowWidth])
  
  return (
    <>
        <Heading 
            isImageLarge={isImageLarge}
            handleClickOnHeaderButtons={handleClickOnHeaderButtons}
            handleClickPreview={handleClickOnPreviewButton}
        />
        <StyledMainComponent>
        {displayPhone && <PhoneIllustration />}
        {buttonPressed === "Links" && <LinksSection />}
        {buttonPressed === "Profile" && <ProfileDetailsSection />}
        </StyledMainComponent>
    </>
  )
}

export default HomePage

const StyledMainComponent = styled.main`
  width: 375px;
  padding: 0px 16px;
  position: relative;

  @media (min-width: 772px) {
    width: 721px;
    padding: 0px;
  }

  @media (min-width: 1280px) {
    width: 1392px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    position: relative;
  }
`