import Apresentacao from "../apresentacao/Apresentacao"
import Lista from "../lista/Lista"
import Footer from "../footer/Footer"
import { ContentContainer } from "./Styled"

function Content() {

    const Tecnologias = ['JavaScript', 'React', 'Vue Js', 'Tailwind CSS', 'Styled Components', 'Sass',
    'Node', 'TypeScript', 'Angular', 'Java']
    
    return(
        <div>
            <ContentContainer>
                <section>
                <Apresentacao />
                <Lista itens={Tecnologias} />
                <Footer />
                </section>
            </ContentContainer>
        </div>
    )
}

export default Content