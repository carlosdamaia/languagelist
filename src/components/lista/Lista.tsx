import { ContainerLista } from "./Styled"

function Lista({ itens }){

    return(
        <ContainerLista>
            <ul>
                {
                    itens.map((item, index) => (
                    <li>{item}</li>
                ))}
            </ul>
        </ContainerLista>
    )
}

export default Lista