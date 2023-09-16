import styled from "styled-components";
import LinkListComponent from "./LinkListComponent";
import LinkContext from "./context/LinkContext";
import { useContext } from "react";

const LinkList = () => {
    const { links } = useContext(LinkContext); 

    return (
        <StyledLinkList>
        {links.map((link) => {
            const {id, platform, input} = link;
                return <LinkListComponent key={id} platform={platform} input={input}/>
        })}
        </StyledLinkList>
    )
}

export default LinkList

const StyledLinkList = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 40%;
    align-items: center;
    width: 260px;
    background: #FFF;
    gap: 8px;

    .manylinks {
        position: absolute;
        bottom: -25px;
        color: var(--dark-grey, #333);
        font-family: Instrument Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
    }
`