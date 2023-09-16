
import styled from "styled-components";
import { useContext } from "react";
import FormContext from "../../context/FormContext";

const PreviewInfo = () => {
  const {firstName, lastName, email, isValid} = useContext(FormContext);

  return (
    <StyledPreviewInfo>
      {isValid ? <h1>{`${firstName} ${lastName}`}</h1> : <StyledEmptyName></StyledEmptyName>}
      {isValid ? <p>{email}</p> : <StyledEmptyEmail></StyledEmptyEmail>}
    </StyledPreviewInfo>
  )
}

export default PreviewInfo

const StyledPreviewInfo = styled.div`
  width: 90%;
  text-align: center;
  height: 80px;
  display: flex;
  gap: 13px;
  flex-direction: column;
  margin-top: 25px;
  align-items: center;
  margin-bottom: 15px;
  

  h1 {
    color: var(--dark-grey, #333);
    font-family: Instrument Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin: 0;
  }

  p {
    color: var(--grey, #737373);
    font-family: Instrument Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`
const StyledEmptyName = styled.div`
  width: 160px;
  height: 16px;
  border-radius: 104px;
  background: #EEE;
`

const StyledEmptyEmail = styled.div`
  width: 72px;
  height: 8px;
  border-radius: 104px;
  background: #EEE;
`


