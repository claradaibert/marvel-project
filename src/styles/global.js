import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "League Spartan", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        max-width: 100vw;
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: none;
    }

    p {
        text-align: center;
    }
`;

export default GlobalStyle;
