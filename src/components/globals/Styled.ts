import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export default GlobalStyle