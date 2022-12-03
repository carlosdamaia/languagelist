import { ContainerButtons } from "./Styled"
import BrazilFlag from "../../assets/images/brazil-flag.png"
import SpainFlag from "../../assets/images/spain-flag.png"
import UsaFlag from "../../assets/images/usa-flag.png"

function Footer() {

    return (
        <ContainerButtons>
            <button>
                <img src={BrazilFlag} />
                <p>Português</p>
            </button>
            <button>
                <img src={SpainFlag} />
                <p>Espanhol</p>
            </button>
            <button>
                <img src={UsaFlag} />
                <p>Inglês</p>
            </button>
        </ContainerButtons>
    )
}

export default Footer