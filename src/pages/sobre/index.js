import { Link } from 'react-router-dom'
import './index.css'
export default function Sobre() {
    return (
<div className='titulo'>
  <h1>Sobre</h1>
  <div className="explicacao">
    <div className="caixa-texto">
      <strong>O que é isso?</strong><br/>
      Este site fornece uma interface API RESTful para objetos altamente detalhados construídos a partir de milhares de linhas de dados relacionados a Pokémon. Cobrimos especificamente a franquia de videogame. Usando este site, você pode consumir informações sobre Pokémon, seus movimentos, habilidades, tipos, grupos de ovos e muito, muito mais.
    </div>
    <div className="caixa-texto">
      <strong>O que é uma API?</strong><br/>
      Uma API (Application Programming Interface) é um contrato que permite aos desenvolvedores interagir com um aplicativo por meio de um conjunto de interfaces. Nesse caso, o aplicativo é um banco de dados de milhares de objetos relacionados a Pokémon e as interfaces são links de URL.

      Uma API RESTful é uma API que está em conformidade com um conjunto de convenções flexíveis baseadas em verbos HTTP, erros e hiperlinks.
    </div>
    <div className="caixa-texto">
      <strong>Já não existem 101 outros sites Pokémon?</strong><br/>
      Sim e esse é exatamente o problema!

      101 instâncias do mesmo site significam 101 instâncias dos mesmos dados.

      Nosso objetivo é fornecer uma fonte única de dados que qualquer número de outros sites possa consumir e usar.

      Freqüentemente, e especialmente quando novos jogos ou atualizações de Pokémon são lançados, esses mais de 101 sites levam semanas para serem atualizados, pois as pessoas precisam inserir as mesmas informações em todos esses lugares diferentes.

      Isso resolve esse problema. Se todos esses sites consumissem seus dados daqui, eles teriam exatamente as mesmas informações que são atualizadas exatamente ao mesmo tempo, sem erros entre cada site. O benefício geral é uma melhor colaboração e consistência em todos os diferentes sites e aplicativos Pokémon. É bom para todos!
    </div>
    <div className="caixa-texto">
      <strong>Autor</strong><br/>
      Ian Augusto Alvarenga Tonim 23924
    </div>
    <Link to="/" className='link'>Home</Link>
  </div>
</div>
    );
}