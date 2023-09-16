import { ReactComponent as LogoGitHub } from "../../../assets/images/icon-github.svg";
import { ReactComponent as LogoArrowDown } from "../../../assets/images/icon-chevron-down.svg";
import { useState, useContext } from "react";
import LinkContext from "../../../context/LinkContext";
import DropDown from "./DropDown";
import styled from "styled-components";
import LinkHeader from "./LinkHeader";
import LinkInput from "./LinkInput";

const LinkComponent = ( {id, platform, removeLink}) => {
    const [platformLogo, setPlatformLogo] = useState(<LogoGitHub />)
    const [dropDownActive, setDropDownActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(platform);
    const { setButtonPressed, updateList, updateLinkPlatform } = useContext(LinkContext)

    const handleClickOnOption = (option, icon) => {
        setSelectedOption(option);
        setPlatformLogo(icon);
        setDropDownActive(!dropDownActive);
        setButtonPressed(false);
        updateList(id, "", option)
        updateLinkPlatform(id, option)
    };

    const handleClickDropDown = () => {
        setDropDownActive(!dropDownActive);
    };

  return (
    <StyledLinkContainer >
        <LinkHeader id={id} removeLink={removeLink}/>
        <div className="link--form">
            <label className="link--label" htmlFor="platform" >Platform</label>
            <div className="platform" name="platform" id="platform" tabIndex="1" onClick={handleClickDropDown}> 
                <div className="platformLogo">{platformLogo}</div>
                <p>{selectedOption}</p>
                <div className={"arrow--logo"}><LogoArrowDown className={`${dropDownActive ? "rotate" : "rotateback"}`}/></div>
            </div>
            {dropDownActive && <DropDown 
                selectOption={handleClickOnOption}
                selected={selectedOption}
            />}
            <LinkInput 
                id={id}
                platform={selectedOption}
                platformLogo={platformLogo}
                clickOption={handleClickOnOption}
            />
        </div>
    </StyledLinkContainer>
  )
}

export default LinkComponent;

const StyledLinkContainer = styled.div`
    border-radius: 12px;
    background: var(--light-grey, #FAFAFA);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid var(--light-grey, #FAFAFA);

    &:hover {
        cursor: grab;
    }

    & >.dragged--over {
        border: 1px dashed grey;
    }

    .link--form {
        display: flex;
        flex-direction: column;
        position: relative;

        .link--label {
            margin-top: 12px;
            margin-bottom: 6px;
        }

        .platform {
            width: 100%;
            height: 48px;
            border-radius: 8px;
            border: 1px solid var(--borders, #D9D9D9);
            background: var(--white, #FFF);
            outline: none;
            color: var(--dark-grey, #333);
            font-size: 16px;
            font-family: Instrument Sans;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            position: relative;
            display: flex;
            align-items: center;
            padding-left: 44px;

            .platformLogo {
                position: absolute;
                left: 16px;
                top: 25%;
            }

            .arrow--logo {
                position: absolute;
                right: 6%;
                top: 24%;
            }
        }

        .platform:hover {
            cursor: pointer;
        }

        .platform:focus {
            border: 1px solid var(--purple, #633CFF);
            box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
        }
    }
`