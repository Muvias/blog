import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    gap: 2rem;
`;

export const Category = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;

    padding: 1rem 0;
`;