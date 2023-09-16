import styled from "styled-components";
import logoHamburger from "../../../assets/images/icon-drag-and-drop.svg";

const LinkHeader = ( {id, removeLink} ) => {
  return (
    <StyledLinkHeader>
      <div className="link--wrapper">
        <img src={logoHamburger} alt="hamburger" className="hamburger"/>
        <p className="link--text">Link #<span>{id}</span></p>
      </div>
      <p className="remove" onClick={() => {removeLink(id)}}>Remove</p>
    </StyledLinkHeader>
  )
}

export default LinkHeader

const StyledLinkHeader = styled.div`
  display: flex;
  justify-content: space-between;

      .link--wrapper {
      display: flex;
      gap: 8px;

          .link--text {
          font-weight: 700;
          }
      }

      .remove:hover {
          cursor: pointer;
      }

`