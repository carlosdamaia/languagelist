import { ContainerButtons } from "./Styled"
import BrazilFlag from "../../assets/images/brazil-flag.png"
import SpainFlag from "../../assets/images/spain-flag.png"
import UsaFlag from "../../assets/images/usa-flag.png"

function Footer() {
    return (
        <ContainerButtons>
            <div>
                <img src={BrazilFlag} />
                <p>Português</p>
            </div>
            <div>
                <img src={SpainFlag} />
                <p>Espanhol</p>
            </div>
            <div>
                <img src={UsaFlag} />
                <p>Inglês</p>
            </div>
        </ContainerButtons>
    )
}

export default Footer