import styled from "styled-components";

const LoginSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const LoginTitle = styled.h1`
    font-size: 1.563rem;
    font-weight: ${props => props.theme.fonts.weight.bold};
`;

const LoginForm = styled.form`
    width: 100%;
    max-width: 20rem;
    padding: 16px;
`;

const FormInputContainer = styled.div`
    margin-bottom: 1rem;
`;

const InputLabel = styled.label`
    display: block;
    font-size: ${props => props.theme.fonts.size.small};
    line-height: ${props => props.theme.fonts.lineHeight.small};
    font-weight: ${props => props.theme.fonts.weight.medium};
    color: ${props => props.theme.colors.darkGray};
`;

const LoginInput = styled.input`
    margin-top: 0.25;
    display: block;
    width: 100%;
    padding: 0.5rem, 0.75rem, 0.5rem, 0.75rem;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.colors.lightGray};
    border-radius: ${props => props.theme.borderRadius.rounded};
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

    &:focus {
        outline: 0;
    }
`;

const LoginButton = styled.button`
    width: 100%;
    background-color: ${props => props.theme.colors.buttons};
    color: white;
    font-weight: ${props => props.theme.fonts.weight.bold};
    padding: 0.5rem 1rem;
    border-radius: ${props => props.theme.borderRadius.rounded};

    &:hover {
        background-color: ${props => props.theme.colors.buttonsHover};
    }

    &:focus {
        outline: 0;
    }
`;

export {
    LoginSection,
    LoginTitle,
    LoginForm,
    FormInputContainer,
    InputLabel,
    LoginInput,
    LoginButton,
}