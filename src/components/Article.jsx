export function Article({ livro }){

  const { titulo, quantidade } = livro;

    const avisar = (event) => {
      console.log(event)
    }

  return (
    <article 
      onClick={avisar}  
      className="caixa azul"
    >
      <h2>{titulo}</h2>
      <p>{quantidade} exemplares</p>
    </article>
  )
}

/**
 * const props = {
 *  livro: {
 *    titulo: "titulo",
      quantidade: 2
 *   },
      autor: "eu"
 * }
 * 
 * 
 * export function Componente( props ) {
 *      return (
 *        <>
 *        </> 
 *      )
 * }
 */
