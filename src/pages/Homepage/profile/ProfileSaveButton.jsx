import { StyledSaveButton } from "../links/LinksSaveButton"

const ProfileSaveButton = ( {onClick} ) => {
    return (
        <StyledSaveButton onClick={onClick} className="button--save">Save</StyledSaveButton>
      )
}

export default ProfileSaveButton