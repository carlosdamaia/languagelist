import styled from "styled-components"

export const ContainerLista = styled.div`
    /*display: flex;
    justify-content: center;
    align-items: center;*/

    width: 53rem;
    height: 13rem;
    background: #27272a;
    border: 2px solid #9d4b00;
    border-radius: 8px;
    display: flex;
    align-self: center;
    padding: 3rem;
    margin: 5em 0;

    ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: flex-start;
        padding: 0 2rem;
        flex-wrap: wrap;
    }

    li {
        font-size: 1.3rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.87);
        margin: 0 1rem;
    }
`;