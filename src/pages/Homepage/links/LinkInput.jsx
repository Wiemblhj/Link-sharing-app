import styled from "styled-components";
import linkLogo from "../../../assets/images/icon-link.svg";
import LinkContext from "../../../context/LinkContext";
import { useContext, useState, useEffect } from "react";

const LinkInput = ( {id, platform, platformLogo} ) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const { buttonPressed, setButtonPressed, linkRegex, updateList, listArray} = useContext(LinkContext);
    const [placeholder, setPlaceholder] = useState("e.g. https://gitbhub.com/user")
    const [regExpression, setRegExpression] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value);
        setButtonPressed(false);
    };

    useEffect(() => {
        listArray.forEach((object) => {
            if(platform === object.title) {
                setRegExpression(object.regEx)
            }
        })
    }, [platform, listArray])

    useEffect(() => {
        listArray.forEach((object) => {
            if(platform === object.title) {
                setPlaceholder(`e.g . ${object.link}user`)
            }
        })
    })

    useEffect(() => {
        if(buttonPressed) {
            if(input === "") {
                setError(true)
                setErrorText("Can’t be empty")
            } else if(!regExpression.test(input)) {
                setError(true)
                setErrorText("Please check the URL")
            } else {
                setError(false);
                updateList(id, input, platform, platformLogo)
            }
            
        }
    }, [buttonPressed, input])

    return (
            <StyledLinkInput>
                <label className="link--label" htmlFor="link">Link</label>
                {error && <p className="error--text">{errorText}</p>}
                <input 
                    type="text" 
                    id="link" 
                    placeholder={placeholder}
                    spellCheck="false" 
                    onChange={handleChange}
                    className={`${error ? "error" : ""}`}
                />
                <img src={linkLogo} alt="link Logo"/>
            </StyledLinkInput>
    )
}

export default LinkInput

const StyledLinkInput = styled.form`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    position: relative;

    input {
        width: 100%;
        height: 48px;
        border-radius: 8px;
        border: 1px solid var(--borders, #D9D9D9);
        background: var(--white, #FFF);
        outline: none;
        padding-left: 44px;
    }

    input::placeholder {
        color: var(--dark-grey, #333);
        font-family: Instrument Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        opacity: 0.5;
    }

    input:hover {
            cursor: pointer;
        }

    input:focus {
        border: 1px solid var(--purple, #633CFF);
        box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25)
    }

    img {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 65%;
        left: 16px;
    }

    .error--text {
        color: var(--red, #FF3939);
        text-align: right;
        font-family: Instrument Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        position: absolute;
        z-index: 50;
        right: 0px;
        top: 15px;
    }

    .error {
        color: rgba(255, 57, 57, 1);
        border: 1px solid var(--red, #FF3939);
    }

     @media (min-width: 772px) {

    input::placeholder {
        font-size: 16px;
    }

    .error--text {
        color: var(--red, #FF3939);
        text-align: right;
        font-family: Instrument Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        position: absolute;
        z-index: 50;
        right: 15px;
        top: 55px;
    }
    
    }

    
`