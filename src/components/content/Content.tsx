import Apresentacao from "../apresentacao/Apresentacao"
import Footer from "../footer/Footer"
import { ContentContainer } from "./Styled"

function Content() {
    return(
        <div>
            <ContentContainer>
                <Apresentacao />
                <Footer />
            </ContentContainer>
        </div>
    )
}

export default Content