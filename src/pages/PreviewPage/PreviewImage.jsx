import { StyledProfilePicture } from "../../components/UploadedImage";
import ImageContext from "../../context/ImageContext";
import { useContext } from 'react';
import styled from "styled-components";

const PreviewImage = () => {
  const { uploadedImage, isImageUploaded } = useContext(ImageContext);

  return (
    <>
    {isImageUploaded ? <StyledProfilePicture style={{position: "static", marginTop: "48px"}}>
          <img src={uploadedImage} alt="uploaded" className="uploaded--image"/>
    </StyledProfilePicture> : <StyledEmptyPicture></StyledEmptyPicture>}
    </>
  )
}

export default PreviewImage

const StyledEmptyPicture = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: rgba(238, 238, 238, 1);
  margin-top: 48px;
`


