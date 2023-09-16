import { createContext, useState, useEffect } from "react";

const FormContext = createContext({})

export const FormProvider = ( {children }) => {
    const [isValid, setIsValid] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);


    const checkInputValidity = (error, id) => {
        if(id === 1) {
            !error ? setFirstNameValid(true) : setFirstNameValid(false);
        } else if(id === 2) {
            !error ? setLastNameValid(true) : setLastNameValid(false);
        } else if(id === 3) {
            !error ? setEmailValid(true) :  setEmailValid(false);
        }
    };

    const gatherFormInfo = (id, input) => {
        if(id === 1) {
            setFirstName(input)
            localStorage.setItem("firstname", JSON.stringify(input))
        } else if(id === 2) {
            setLastName(input)
            localStorage.setItem("lastname", JSON.stringify(input))
        } else if(id === 3) {
            setEmail(input)
            localStorage.setItem("email", JSON.stringify(input))
        }
    };

    useEffect(() => {
        if(firstNameValid && lastNameValid && emailValid) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [firstNameValid, lastNameValid, emailValid]);

    const contextValue = {
        setIsValid: setIsValid,
        gatherFormInfo: gatherFormInfo,
        checkInputValidity: checkInputValidity,
        firstName: firstName,
        lastName: lastName, 
        email: email,
        isValid: isValid, 
    };

    return (
        <FormContext.Provider value = {contextValue}>
        {children}
        </FormContext.Provider>
    )
} 

export default FormContext;