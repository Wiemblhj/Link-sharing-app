import styled from "styled-components";

function InfoHeading( {info} ) {
  const {title, text} = info;
  return (
    <>
      <StyledLargeHeading>{title}</StyledLargeHeading>
      <p>{text}</p>
    </>
  )
}

export default InfoHeading


export const StyledLargeHeading = styled.h1`
  color: var(--dark-grey, #333);
  font-size: 24px;
  font-family: Instrument Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 10px;
  margin-top: 0px;
  text-align: left;

  @media (min-width: 772px) {
    font-size: 32px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
  }
`