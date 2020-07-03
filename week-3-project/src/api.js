import React, {useEffect, useState} from "react";

// Exercise Pokedex:
// A pokedex is a machine that displays all the known pokemon
// Render all the known pokemons for our user
// TODO: after fetching the pokemons from the api set it to our state
// TODO: render the names of the pokemons

class Pokedex extends React.Component {

    state = {
        pokemons: []
    }

    componentDidMount() {
        const fetchPokemons = () => {
            return fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => response.json())
                .then(json => json.pokemon_entries);
        };

        fetchPokemons()
            .then((pokemons) => {
                this.setState(pokemons)
                  // Set the state here
            });
    }

    render() {
        return (
            <div className={'pokedex'}>
                <h2>Pokedex</h2>
                {
                    this.state.pokemons.map(pokemon => <Pokemon key={pokemon.entry_number} {...pokemon} />)
                }
            </div>
        )
    }

}

class Pokemon extends React.Component {
    render() {
        return (
            <article>
                {this.props.pokemon_species.name/* Render the property here */}
            </article>
        )
    }
}

class InteractivePokedex extends React.Component {

    state = {
        pokemons: [],
        selectedPokemon: false,
        flavor: [] 
    }

    onSelectHandler = (pokemon) => {
        const fetchPokemon = () => {
            return fetch(pokemon.url)
                .then(response => response.json());
        };
      fetchPokemon()
      .then((pokemon) => this.setState({
          selectedPokemon: true,
          flavor: pokemon.flavor_text_entries}))
        /* Use the result of the fetchPokemon function */
        /* set the result using selectedPokemon, be sure to support the render below */
    };

    componentDidMount() {
        const fetchPokemons = () => {
            return fetch('https://pokeapi.co/api/v2/pokedex/2/')
                .then(response => response.json())
                .then(json => json.pokemon_entries);
        };

        fetchPokemons()
            .then((pokemons) => {
                this.setState(pokemons)// Set the state here
            });
    }

    render() {
        return (
            <div className={'pokedex'}>
                <h2>Interactive Pokedex</h2>
                {
                    this.state.selectedPokemon === false
                        ? (
                            this.state.pokemons.map(pokemon => <InterActivePokemon key={pokemon.entry_number} {...{
                                pokemon_species: pokemon.pokemon_species,
                                onSelectHandler: this.onSelectHandler}} 
                            /* pass the onSelectHandler here a property */ />)
                        )
                        : (
                            <DetailedPokemon {...{ flavor_text_entries: this.state.flavor }} />
                        )
                }
            </div>
        )
    }
}

class DetailedPokemon extends React.Component {
    render() {
        return (
            <article>
                {this.props.flavor_text_entries.map((entry, index) => <p key={index}>{entry.flavor_text}</p>)}
            </article>
        )
    }
}

class InterActivePokemon extends React.Component {

    onClick = () => {
        this.props.onSelectHandler(this.props.pokemon_species);  /* trigger the onSelectedHandler function with the pokemon_species */
    };

    render() {
        return (
            <article>
                {this.props.pokemon_species.name/* Render the property here */}
                <button onClick={this.onClick}>Learn more</button>
            </article>
        )
    }
}

export { Pokedex, InteractivePokedex };