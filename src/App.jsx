import './App.css'
import { Article } from "./components/Article"
import Footer from './components/Footer';
import { Header } from './components/Header';
import Main from './components/Main';

function App() {
  const livros = [
    {
      id: 1,
      titulo: "titulo1",
      quantidade: 1,
      autor: "eu1"
    },
    {
      id: 2,
      titulo: "titulo2",
      quantidade: 2,
      autor: "eu2"
    },
    {
      id: 3,
      titulo: "titulo3",
      quantidade: 3,
      autor: "eu3"
    },
  ]

  return (
    <>
      <Header/>
      {/* livro  = props.livro e autor = props.autor no componente Article*/}
      {
        livros.map(livro => {
          return (
            <Article 
              key={livro.id} 
              livro={livro} 
              autor={livro.autor}
            />
          )
        })
      }
      <Main/>
      <Footer/>
    </>
  )
}

export default App
