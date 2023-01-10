import { useState } from "react"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import GlobalStyle from "./components/globals/Styled"

const languages = [
  "Olá, meu nome é Carlos Eduardo da Maia e eu sou um desenvolvedor Front-End. Tecnologias que tenho experiência:",
  "Hola, mi nombre es Carlos Eduardo da Maia y soy desarrollador Front-End. Tecnologías con las que tengo experiencia:",
  "Hello, my name is Carlos Eduardo da Maia and I am a Front-End developer. Technologies I have experience with:",
]

console.log(languages[0])

function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Content />
    </div>
  )
}

export default App
