import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body, button {
        font-family: ${props => props.theme.fonts.base};
        background-color: ${props => props.theme.colors.lightwhite};
    }

    a {
        text-decoration: none;
    }

    
`

export default GlobalStyles;