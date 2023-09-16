import InfoHeading from "../../../UI/InfoHeading"
import ProfileDetails from "./ProfileDetails"
import ProfileSaveButton from "./ProfileSaveButton";
import styled from "styled-components";
import { useState } from "react";

const ProfileDetailsSection = () => {
    const [hasButtonBeenPressed, setHasButtonBeenPressed] = useState(false);

    const profileInfo = {
        title: "Profile Details",
        text: "Add your details to create a personal touch to your profile."
    };

    const clickingOnSaveButton = () => {
        setHasButtonBeenPressed(true);
    };

    const buttonReset = () => {
        setHasButtonBeenPressed(false)
    };


  return (
    <>
    <StyledProfileSection>
        <InfoHeading 
            info={profileInfo}
        />
        <ProfileDetails 
            buttonPressed={hasButtonBeenPressed} 
            buttonReset={buttonReset}
            clickSaveButton={clickingOnSaveButton}
        />
        <StyledFooter>
            <ProfileSaveButton
                onClick={clickingOnSaveButton}
            />
        </StyledFooter>
    </StyledProfileSection>
    </>
  )
}

export default ProfileDetailsSection;

const StyledProfileSection = styled.section`
    background: white;
    margin-top: 24px;
    width: 100%;
    padding: 24px;

    @media (min-width: 772px) {
        width: 720px;
        height: 779px;
        display: flex;
        padding: 40px;
        flex-direction: column;
        align-items: flex-start;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    @media (min-width: 1280px) {
        width: 808px;
    }
`

const StyledFooter = styled.footer`
    width: 343px;
    height: 78px;
    margin-bottom: 16px; 
    background: white;
    border-top: 1px solid #D9D9D9;
    padding: 16px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: absolute;
    bottom: -100px;
    left: 16px;

  @media (min-width: 772px) {
    width: 721px;
    height: 94px;
    margin-bottom: 24px; 
    padding: 24px 40px;
    display: flex;
    justify-content: flex-end;
    left: 0px;
  }

  @media (min-width: 1280px) {
    width: 808px;
    height: 94px;
    margin-bottom: 24px; 
    padding: 24px 40px;
    display: flex;
    justify-content: flex-end;
    bottom: -55px;
    left: 584px;
  }

`