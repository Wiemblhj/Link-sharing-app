import PreviewHeader from "./PreviewHeader";
import PreviewInfo from "./PreviewInfo";
import PreviewImage from "./PreviewImage";
import PurpleBackground from "../../UI/PurPleBackground";
import { useContext } from "react";
import styled from "styled-components";
import LinkContext from "../../context/LinkContext";
import LinkListComponent from "../../LinkListComponent";
import ClipboardComponent from "./ClipboardComponent";

const PreviewPage = () => {
  const { links } = useContext(LinkContext); 

  return (
    <StyledPreviewPage>
      <PurpleBackground />
      <PreviewHeader/>
      <div className="preview--container">
        <PreviewImage />
        <PreviewInfo />
        <StyledLinkList>
        {links.map((link) => {
            const {id, platform, input} = link;
            return <LinkListComponent key={id} platform={platform} input={input}/>
        })}
        </StyledLinkList>
        <ClipboardComponent />
      </div> 
    </StyledPreviewPage>
  )
}

export default PreviewPage

const StyledPreviewPage = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #FFF;
    align-items: center;

  .preview--container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #FFF;
    min-height: 569px;
    position: relative;
  }

  @media (min-width: 772px) {
    background: var(--light-grey, #FAFAFA);
    position: relative;

    .preview--container {
      width: 349px;
      border-radius: 24px;
      box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);
      top: 150px;
      position: absolute;
      z-index: 50;
    }

  }

  @media (min-width: 1280px) {
    .preview--container {
      width: 349px;
      border-radius: 24px;
      box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);
      top: 210px;
      position: absolute;
      z-index: 50;
    }
  }
`

const StyledLinkList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    background: #FFF;
    gap: 20px;
    padding: 10px;
    margin-bottom: 38px;
`