import { useContext } from "react";
import styled from "styled-components";
import ImageContext from "../../../context/ImageContext";
import { ReactComponent as LogoUpload } from "../../../assets/images/icon-upload-image.svg"

const ProfileUploadImage = () => {
  const {uploadedImage, isImageUploaded, handleChange} = useContext(ImageContext);

  return (
    <StyledUploadComponent>
        <input className={`upload--input ${isImageUploaded ? "uploaded" : ""}`} type="file" accept="image/jpeg, image/png, image/jpg" onChange={(event) => {handleChange(event)}}></input>
        <LogoUpload 
          alt="upload" 
          className={isImageUploaded ? "uploaded--logo" : "upload--logo"}
        />
        <p className={isImageUploaded ? "uploaded--text" : ""}>{isImageUploaded ? "Change Image" : "+ Upload Image"}</p>
        <output>
            {isImageUploaded && <img src={uploadedImage} alt="uploaded" className={`${isImageUploaded ? "uploaded--image" : ""}`}/>}
        </output>
    </StyledUploadComponent>
  )
}

export default ProfileUploadImage

const StyledUploadComponent = styled.div`
  width: 193px;
  height: 193px;
  border-radius: 12px;
  background: var(--light-purple, #EFEBFF);
  margin-top: 16px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .upload--input {
    position: absolute;
    opacity: 0;
    width: 193px;
    height: 193px;
  }

  .upload--input:hover {
    cursor: pointer;
  }

  output {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .uploaded--image {
    width: 193px;
    height: 193px;
  }

  output img {
    border-radius: 8px;
  }

  p {
    position: absolute;
    top: 60%;
    color: var(--purple, #633CFF);
    font-weight: 600;
  }

  .upload--input:hover p {
    color: red;
  }

  &:hover p {
    visibility: visible;
  }

  &:hover .uploaded--logo {
    visibility: visible;
  }

  &:hover .lightbox {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 20;
    background: black;
    opacity: 0.4;
    border-radius: 12px;
    cursor: pointer;
  }

  .uploaded--text {
    color: white;
    z-index: 50;
    visibility: hidden;
  }

  .upload--logo {
    fill: rgba(99, 60, 255, 1);
  }

  .uploaded--logo {
    fill: white;
    position: absolute;
    top: 35%;
    z-index: 50;
    visibility: hidden;
  }

  @media (min-width: 772px) {
    margin-left: 150px;
  }

  @media (min-width: 1280px) {
    margin-left: 220px;
  }
`