import styled from "styled-components";
import { useContext } from "react";
import LinkContext from "../../../context/LinkContext";

const DropDown = ( {selectOption, selected} ) => {

  const { listArray } = useContext(LinkContext)

  return (

    <StyledUl>
      {listArray.map(list => {
        const {id, title, icon} = list;
        return (
          <li 
            key={id} 
            onClick={() => selectOption(`${title}`, icon)} 
            className={`${selected === title ? "selected" : ""}`}>{icon}{title}</li>
        )
      })}
    
    </StyledUl>
  )
}

export default DropDown


const StyledUl = styled.ul`
  list-style: none;
  border-radius: 8px;
  border: 1px solid var(--borders, #D9D9D9);
  background: var(--white, #FFF);
  padding: 0px 12px 0px 12px;
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 80px;

  & > li {
    display: flex;
    width: 100%;
    height: 48px;
    gap: 12px;
    align-items: center;
    border-bottom: 1px solid var(--borders, #D9D9D9);
  }

  & > li:hover {
    cursor: pointer;
  }

  & > li.selected {
    color: var(--purple, #633CFF);
    fill: var(--purple, #633CFF);
  }  

  & > .frontend {
    border-bottom: 1px solid white;
  }
`