import styled from "styled-components";

export const Container = styled.div`
    transition: opacity 300ms ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

export const PostCardCover = styled.div`
    margin-bottom: 1rem;

    cursor: pointer;

    img {
        display: block;

        width: 100%;
    }
`;

export const PostCardHeading = styled.h2`
    font-size: 1.4rem;

    a {
        color: #333;
    }
`;