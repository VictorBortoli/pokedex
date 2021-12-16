import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #474745;

        font-family: 'Poppins', sans-serif;
    }

    #root {
        max-width: 2000px;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 480px) {
        html {
            font-size: 10px;
        }
        
        #root {
            max-with: 300px;
        }
    }
`
