import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        outline: none;
        
        background: #F3F3F3;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
    }

    a {
        text-decoration: none;

        transition: opacity 250ms ease-in-out;

        &:hover {
            opacity: .6;
        }
    }
`