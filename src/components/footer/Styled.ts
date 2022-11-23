import styled from "styled-components"

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5em 0 0 0;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 2em;
        padding: 0.5em 1em;
        background-color: rgb(39,39,42);
        border-radius: 0.3125em;
        color: white;
        font-family: Inter, sans-serif;
        font-weight: 500;
    }

    img {
        padding-right: 0.5em;
    }
`;