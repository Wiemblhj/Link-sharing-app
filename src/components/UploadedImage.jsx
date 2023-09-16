import { useContext } from 'react';
import ImageContext from '../context/ImageContext';
import styled from "styled-components";

const UploadedImage = () => {
    const { uploadedImage, isImageUploaded } = useContext(ImageContext);

    return (
        <>
        {isImageUploaded && <StyledProfilePicture>
            <img src={uploadedImage} alt="uploaded" className="uploaded--image"/>
        </StyledProfilePicture>}
        </>
  )
}

export default UploadedImage;

export const StyledProfilePicture = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 138px;
    border: 4px solid var(--purple, #633CFF);

    .uploaded--image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`