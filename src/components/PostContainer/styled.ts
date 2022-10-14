import styled from "styled-components";

export const Container = styled.article`
    img {
        max-width: 100%;
    }

    p {
        margin: 1.3rem 0;
    }

    ul, ol {
        margin: 1.2rem 1.5rem;
    }

    pre {
        width: 100%;
        padding: 1rem;

        margin: 1.5rem 0;

        color: #333;
        background: lightgray;

        font-size: 1.3rem;
        line-height: 1.5;

        overflow-x: auto;

        code {
            background: lightgray;
        }
    }
`