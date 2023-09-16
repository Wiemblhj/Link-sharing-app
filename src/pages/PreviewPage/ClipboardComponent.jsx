import styled from "styled-components"
import { useContext } from "react"
import LinkContext from "../../context/LinkContext"
import { ReactComponent as LogoClipboard } from "../../assets/images/icon-link-copied-to-clipboard.svg"

const ClipboardComponent = () => {
    const { sharedClicked } = useContext(LinkContext)

  return (
    <>
    {sharedClicked && <StyledClipboardComponent>
        <LogoClipboard />
        <p>The link has been copied to your clipboard!</p>
    </StyledClipboardComponent>}
    </>
  )
}

export default ClipboardComponent

const StyledClipboardComponent = styled.div`
    width: 520px;
    height: 10px;
    border-radius: 12px;
    background: var(--dark-grey, #333);
    box-shadow: 1px 0px 32px 0px rgba(0, 0, 0, 0.10);
    color: var(--light-grey, #FAFAFA);
    font-family: Instrument Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 14px;
    position: absolute;
    bottom: -40px;

    @media (min-width: 772px) {
      width: 397px;
      height: 56px;
      bottom: -120px;
    }
`