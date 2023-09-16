import { useEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import FormContext from "../../../context/FormContext";

const ProfileForm = ( {info, buttonPressed, buttonReset} ) => {
    const [input, setInput] = useState("");
    const {id, label, placeholder, type} = info;
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");

    const {gatherFormInfo, checkInputValidity} = useContext(FormContext);

    useEffect(() => {
        if(buttonPressed) {
            checkInputValidity(error, id)
            gatherFormInfo(id, input)
        }
    }, [buttonPressed, input, error])

    const handleChange = (event) => {
        setInput(event.target.value)
        buttonReset();
    };
    
    useEffect(() => {
        const regExpName = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
        if(buttonPressed && (type === "firstName" || type === "lastName")) {
            if(input === "") {
                setError(true)
                setErrorText("Cant be empty");
            } else {
                !regExpName.test(input) ? setError(true) : setError(false);
                error ? setErrorText("must be a valid name") : setErrorText("");
            }
        }
    }, [buttonPressed, input, error, errorText, type])

    useEffect(() => {
        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(buttonPressed && type === "Email") {
            if(input === "") {
                setError(false)
            }
            if(input !== "") {
                regExpEmail.test(input) ? setError(false) : setError(true);
                setErrorText("must contain valid email");
            }
        }
    }, [buttonPressed, input, error, errorText, type])


    return (
        <StyleProfileForm>
            <div className="label--panel">
                <label>{label}</label>{error && <label className="error">{errorText}</label>}
            </div>
            <input 
                className={error ? "error--border" : ""} 
                placeholder={placeholder} 
                onChange={handleChange}>
            </input>
        </StyleProfileForm>
    )
}

export default ProfileForm;


const StyleProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;

    .label--panel {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input {
        height: 48px;
        border-radius: 8px;
        border: 1px solid var(--borders, #D9D9D9);
        background: var(--white, #FFF);
        padding: 12px 16px;
        outline: none;
        position: relative;
    }

    input::placeholder {
        opacity: 0.5;
    }

    input:hover {
        cursor: pointer;
    }

    input:focus {
        border: 1px solid var(--purple, #633CFF);
        box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
    }

    .error--border {
        border: 1px solid var(--red, #FF3939);
    }

    .error {
        color: var(--red, #FF3939);
        text-align: right;
        font-family: Instrument Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
    }

    @media (min-width: 772px) {

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

        .error {
            position: absolute;
            right: 70px;
            z-index: 50;
        }

        input {
            width: 322px;
        }
    }

    @media (min-width: 1280px) {
        input {
            width: 432px;
        }
    }
`