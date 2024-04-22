import { Link } from 'react-router-dom'

export default function Error(){
    return (
        <div>
            <h2> Opa amigo, essa página que você está acessando não existe</h2>
            <br/>

            <span> Encontramos as seguintes páginas</span><br/>
            <Link to='/'>HOME</Link><br/>
            <Link to='/sobre'>SOBRE</Link>
        </div>
    )
}