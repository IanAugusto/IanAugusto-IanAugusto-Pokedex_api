import {Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <h2> POKEDEX API</h2>

            <div className='menu'>
            <Link to='/' className='link-header'>Home</Link>
            <Link to='sobre' className='link-header'>Sobre</Link>
            </div>
        </header>
    )
}