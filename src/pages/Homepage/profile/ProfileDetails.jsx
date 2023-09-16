import ProfileUploadImage from "./ProfileUploadImage";
import ProfileForm from "./ProfileForm";
import styled from "styled-components";
import ImageContext from "../../../context/ImageContext";
import { useContext } from "react";

const ProfileDetails = ( {buttonPressed, buttonReset} ) => {
    const formInfoArray = [
        {id: 1, label: "First name*", placeholder: "Enter your name ", type: "firstName"},
        {id: 2, label: "Last name*", placeholder: "Enter your last name", type: "lastName"},
        {id: 3, label: "Email", placeholder: "e.g email@example.com", type: "Email"},
    ];

    const { isImageToBig } = useContext(ImageContext);

  return (
    <StyledProfileComponent>
        <div className="picture--panel">
            <p>Profile Picture</p>
            <ProfileUploadImage />
            {isImageToBig && <p className="tobig">Image is to big, try again!</p>}
            <p className="image--text">Image must be below 1024x1024px. Use PNG or JPG format.</p>
        </div>
        <div className="forms--container">
            {formInfoArray.map(object => (
                <ProfileForm 
                    key={object.id} 
                    info={object} 
                    buttonPressed={buttonPressed} 
                    buttonReset={buttonReset}
                />
            ))}
        </div>
    </StyledProfileComponent>
  )
}

export default ProfileDetails

const StyledProfileComponent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    
    
    .picture--panel {
        display: flex;
        flex-direction: column;
        background: var(--light-grey, #FAFAFA);
        border-radius: 12px;
        padding: 20px;
        margin-top: 40px;
        position: relative;
    }

    .image--text {
        font-size: 12px;
        font-family: Instrument Sans;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    .tobig {
        font-size: 12px;
        font-family: Instrument Sans;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        position: absolute;
        bottom: 10%;
        right: 2%;
        color: red;
    }

    .forms--container {
        width: 100%;
        background: var(--light-grey, #FAFAFA);
        border-radius: 12px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 24px;
    }

    @media (min-width: 772px) {
        .picture--panel {
            height: 230px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        
        }

        .forms--container {
            height: 208px;
            background: var(--light-grey, #FAFAFA);
        }

        .image--text {
            width: 127px;
        }
    }

    @media (min-width: 1280px) {

    }
`