
import {ReactComponent as LogoProfile} from "../../../assets/images/icon-profile-details-header.svg";
import styled from "styled-components";

export const StyledProfileButton = styled.div`
    padding: 11px 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 8px;
    white-space: nowrap;

    &:hover {
      color: rgba(99, 60, 255, 1);
      cursor: pointer;
    }
        
    .header--logo {
      fill: Grey;
    }

    &.active {
      background: var(--light-purple, #EFEBFF);
      color: rgba(99, 60, 255, 1);

      .header--logo {
        fill: rgba(99, 60, 255, 1);
      }
    }

    &:hover .header--logo {
      fill: rgba(99, 60, 255, 1);
    }
`

const HeaderProfileButton = ( {isImageLarge, handleClick, selectedIcon} ) => {
  return (
    <StyledProfileButton className={`${selectedIcon === "LogoProfile" ? "active" : ""}`} onClick={()=> {handleClick("LogoProfile", "Profile")}}>
        <LogoProfile className={`header--logo`}/>
        {isImageLarge ? <p>Profile Details</p> : null}
    </StyledProfileButton>
  )
}

export default HeaderProfileButton;