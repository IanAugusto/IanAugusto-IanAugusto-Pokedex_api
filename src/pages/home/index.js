import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './index.css';

export default function Home() {
    const [pokemon, setPokemon] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    function searchPokemon() {
        let url = `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`;
        fetch(url)
            .then(response => response.json())
            .then(json => setPokemon(json))
            .catch(err => console.log(err));
    }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        searchPokemon();
    }
  
    return (
        <div className="container">
    <div className='header-secundario'>
      <h1>Seja bem vindo Ao Pokedex</h1>
      <h2>Para descobrir mais informações sobre pokemons basta pesquisar pelo nome</h2>
    </div>
    <div className='caixa-de-pesquisa'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Pesquisar Pokémon:</label>
        <input type="text" id="search" value={searchTerm} onChange={handleSearchChange} />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
    {pokemon && (
      <div className="pokemon-info">
        <h1>Pokemon</h1>
        <div>Nome: {pokemon.name}</div>
        <div>Peso: {pokemon.weight / 10}</div>
        <div>Altura: {pokemon.height / 10}</div>
        <div>Experiência: {pokemon.base_experience}</div>
        {pokemon.types && pokemon.types.length > 0 && (
          <div>Tipo: {pokemon.types[0].type.name}</div>
        )}
        {pokemon.sprites && pokemon.sprites.other && (
          <img className="pokemon-image" src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        )}
      </div>
    )}
    <div className="link-api">
      <h3>Saiba mais sobre a API</h3>
      <Link to="/sobre" className='link'>Ir para Sobre</Link>
    </div>
  </div>
    )
}