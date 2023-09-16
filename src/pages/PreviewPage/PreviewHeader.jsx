import ButtonShare from "./ButtonShare";
import ButtonEditor from "./ButtonEditor";
import styled from "styled-components";
import { useContext } from "react";
import LinkContext from "../../context/LinkContext";
import { useNavigate } from "react-router-dom";

const PreviewHeader =  ( ) => {
  const { shareUrl, setSharedClicked } = useContext(LinkContext); 
  const navigate = useNavigate();

  const handleClickShared = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      console.log("text copied to clipboard")
    }).catch((error) => {
      console.log("failed to copy text", error)
    })
    setSharedClicked(true)
  }

  const handleClickOnBack = () => {
    navigate("/")
    setSharedClicked(false)
  };

  return (
    <StyledPreviewHeader>
        <ButtonEditor onClick={handleClickOnBack}/>
        <ButtonShare onClick={handleClickShared}/>
    </StyledPreviewHeader>
  )
}

export default PreviewHeader;
const StyledPreviewHeader = styled.div`
  max-width: 1250px;
  min-width: 350px;
  height: 74px;
  display: flex;
  align-items: center;
  background: var(--white, #FFF);
  border-radius: 12px;
  padding: 16px;
 
  justify-content: space-between;
  margin: 20 auto; /* Center horizontally */
  
  @media (min-width: 772px) {
    min-width: 720px;
    height: 78px;
    border-radius: 12px;
    padding: 16px;
    margin: 24px 20px 20px auto; /* Center horizontally and add margin at the top */
    position: absolute;
  }

  @media (min-width: 1280px) {
    width: 1392px;
    height: 78px;
    border-radius: 12px;
  }
`;