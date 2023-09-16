import phoneLogo from "../../../assets/images/illustration-phone-mockup.svg";
import styled from "styled-components";
import { useContext } from "react";
import FormContext from "../../../context/FormContext";
import UploadedImage from "../../../components/UploadedImage";
import LinkList from "../../../LinkList";

const PhoneIllustration = () => {
  const {firstName, lastName, email, isValid} = useContext(FormContext);

  return (
    <StyledPhoneIllustration>
        <img src={phoneLogo} alt="phone illustration" className="phone"/>
        <UploadedImage />
        {isValid && <p className="fullname">{`${firstName} ${lastName}`}</p>}
        {isValid && <p className="email">{email}</p>}
        <LinkList />
    </StyledPhoneIllustration>
  )
}

export default PhoneIllustration

const StyledPhoneIllustration = styled.div`

@media (min-width: 1280px) {
  position: relative;
  width: 560px;
  height: 839px;
  border-radius: 12px;
  background: var(--white, #FFF);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  .phone {
    margin-bottom: 60px;
  }

  .fullname, .email {
    font-style: normal;
    font-family: Instrument Sans;
    position: absolute;
    line-height: 150%;
    background: #FFF;
    text-align: center;
  }

  .fullname {
    top: 248px;
    color: var(--dark-grey, #333);
    font-size: 18px;
    font-weight: 600;
    width: 280px;
  }

  .email {
    color: var(--grey, #737373);
    top: 280px;
    font-size: 14px;
    font-weight: 400;
    width: 230px;
  }
}
`
