import { Cabecalho, LogoContainer, LogoPng } from "./Styled"
import StackxLogo from "../../assets/images/stackxlogo.png"

function Header() {
    return (
        <div>
            <Cabecalho>
                <LogoContainer>
                    <LogoPng src={StackxLogo} alt="Logo StackX"/>
                </LogoContainer>
            </Cabecalho>
        </div>
    )
}

export default Header