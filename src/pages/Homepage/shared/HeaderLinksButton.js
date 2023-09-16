import {ReactComponent as LogoLinks} from "../../../assets/images/icon-links-header.svg";
import { StyledProfileButton } from "./HeaderProfileButton";

function HeaderLinksButton( {isImageLarge, handleClick, selectedIcon} ) {
  return (
    <StyledProfileButton className={`${selectedIcon === "LinkLogo" ? "active" : ""}`} onClick={()=> {handleClick("LinkLogo", "Links")}}>
        <LogoLinks className={`header--logo`}/>
        {isImageLarge ? <p>Links</p> : null}
    </StyledProfileButton>
  )
}

export default HeaderLinksButton;