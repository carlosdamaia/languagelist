import { useState } from "react"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import GlobalStyle from "./components/globals/Styled"

const languages = [{
  pt: "Olá, meu nome é Carlos Eduardo da Maia e eu sou um desenvolvedor Front-End. Tecnologias que tenho experiência:",
  es: "Hola, mi nombre es Carlos Eduardo da Maia y soy desarrollador Front-End. Tecnologías con las que tengo experiencia:",
  en: "Hello, my name is Carlos Eduardo da Maia and I am a Front-End developer. Technologies I have experience with:"
}]


function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <div>
        <h1>{languages.indexOf(2)}</h1>
      </div>
      <Content />
      
    </div>
  )
}

export default App
