import styled from "styled-components"

export const ContentContainer = styled.div`
    background: rgb(18,18,18);
    text-align: center;
    padding: 5em 0 2em 0;
    
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    p {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 1.25em;
        line-height: 1.5em;
        color: white;
    }

    span {
        font-weight: 700;
    }
`;