import { ContainerLista } from "./Styled"

function Lista({ itens }){

    return(
        <ContainerLista>
            {
                itens.map((item, index) => (
                <li>{item}</li>
            ))}
        </ContainerLista>
    )
}

export default Lista