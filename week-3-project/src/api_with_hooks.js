import React, {useEffect, useState} from "react";

// Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    // This use effect might be confusing
    // But is is an example of another type of hook
    // For now it is unimportant to know how it works exactly
    // Just know that it executes the function once on first render
    useEffect(() => {
        const fetchPokemons = () => {
            return fetch('')
                .then(response => response.json())
                .then(json => json.pokemon_entries);
        };

        fetchPokemons() 
        .then((pokemons) => setPokemons(pokemons))
         /* Use the result of the fetchPokemons function */
        /* set the result using setPokemons, be sure to support the render below */
    }, []);

    return (
        <div className={'pokedex'}>
            <h2>Pokedex</h2>
            <h3>With hooks</h3>
            {
                pokemons.map(pokemon => <Pokemon key={pokemon.entry_number} {...pokemon} />)
            }
        </div>
    )
};

const Pokemon = (props/* add the property we want to use in order to display the name */ ) => {
    return (
        <article>
            {props.pokemon_species.name/* Render the property here */}
        </article>
    )
};

// Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

const InteractivePokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(false);
    const [flavor, setFlavor] = useState([]);

    // This use effect might be confusing
    // But is is an example of another type of hook
    // For now it is unimportant to know how it works exactly
    // Just know that it executes the function once on first render
    useEffect(() => {
        const fetchPokemons = () => {
            return fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => response.json())
                .then(json => json.pokemon_entries);
        };
        fetchPokemons() 
            .then((pokemons) => setPokemons(pokemons))
        /* Use the result of the fetchPokemons function */
        /* set the result using setPokemons, be sure to support the render below */
    }, []);

    const onSelectHandler = (pokemon) => {
        const fetchPokemon = () => {
            return fetch(pokemon.url)
                .then(response => response.json());
        };

        fetchPokemon()
        .then((pokemon) => {
        setSelectedPokemon(true);
        setFlavor(pokemon.flavor_text_entries)
        })
        /* Use the result of the fetchPokemon function */
        /* set the result using selectedPokemon, be sure to support the render below */
    };

    return (
        <div className={'pokedex'}>
            <h2>Interactive Pokedex</h2>
            {
                selectedPokemon === false
               ? (
                    pokemons.map(pokemon => <InterActivePokemon key={pokemon.entry_number} {...{
                                    pokemon_species: pokemon.pokemon_species,
                                    onSelectHandler: onSelectHandler,
                                }} /* pass the onSelectHandler here a property */ />)
                )
               : (
                    <DetailedPokemon {...{ flavor_text_entries: flavor }} />
               )
            }
        </div>
    )

};

const DetailedPokemon = ({ flavor_text_entries }) => {
    return (
        <article>
            {flavor_text_entries.map((entry, index) => <p key={index}>{entry.flavor_text}</p>)}
        </article>
    );
};

const InterActivePokemon = ({ pokemon_species, onSelectHandler }) => {
    const onClick = () => {
       onSelectHandler(pokemon_species) /* trigger the onSelectedHandler function with the pokemon_species */
    };

    return (
        <article>
            {pokemon_species.name} 
            <button onClick={onClick}>Learn more</button>
        </article>
    )
};


export { Pokedex, InteractivePokedex };