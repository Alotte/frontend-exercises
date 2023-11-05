import pokemons from "./pokemons.json";
import React, { useState } from 'react';
import ExerciseCard from "../ExerciseCard";
import styles from "./Exercise9.module.css";
import stylesPage from "../../page.module.css";


const PokemonCard = ({pokemon, handleClick}) => {
    

    return (
        <div className={styles.pokemon_card}>
            <h3>{pokemon.name+ ""}</h3>
            <p>Type: {pokemon.type.join(' | ')}</p>
            <p>Abilities: {pokemon.abilities.join(', ')}</p>
            <button className={stylesPage.button_primary} onClick={() => handleClick(pokemon)}> I choose you!</button>
        </div>
    )
}

const Exercise9 = () => {
    const [chosenPokemon, setChosenPokemon] = useState("");
    const handleClick = (pokemon) => {
        setChosenPokemon(pokemon.name);
        console.log("Clicked on: " + pokemon.name);
    }
    return (
        <>
        
            <h2>Exercise 9: Pokemon Cards</h2>
            <h4>Chosen Pokémon: </h4>
            <h2 className= {stylesPage.gradient}>{chosenPokemon} </h2>
            <div className={styles.pokemon_grid}>
        {
            pokemons.map((pokemon) => (
                    <PokemonCard pokemon = {pokemon} handleClick = {handleClick}/>
            ))
        }
        </div>
            
    

        </>
    )
}


export default Exercise9