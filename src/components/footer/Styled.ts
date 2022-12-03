import styled from "styled-components"

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5em 0 0 0;

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: rgb(39,39,42);
        border: none;
        border-radius: .3125em;
        margin-right: 2em;
        padding: .5em 1em;
        transition: .2s;
    }

    button:hover {
        cursor: pointer;
        background-color: rgb(18,18,18);
        border: 0.5px solid rgb(39,39,42);
    }

    img {
        padding-right: 0.5em;
    }
`;