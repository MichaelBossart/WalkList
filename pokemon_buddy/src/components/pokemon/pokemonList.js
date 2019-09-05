import React, { Component } from 'react';
import PokemonCard from './pokemonCard';
import axios from 'axios'; 

export default class PokemonList extends Component {
    state={
        url:'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',//change this to 151 to get all pokemon
        pokemon: null,
        
    }
    
    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results'] });

       
    } // this goes in back end gehhhhhh

   

    render() {
        return (
            <React.Fragment>
            {this.state.pokemon ? (
            <div className ="row" >
            {this.state.pokemon.map(pokemon =>(
                <PokemonCard
                key={pokemon}
                name = {pokemon.name}
                url ={pokemon.url}
               
                />
            ))}      
        </div>) : ( <h1>pokemon loading</h1>)}
        </React.Fragment>
        );
    }
}

