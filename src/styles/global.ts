import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(90deg, #b3e8ff 0%, #d8afff 50%, #ffb6fc 100%);

        font-family: 'Poppins', sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
