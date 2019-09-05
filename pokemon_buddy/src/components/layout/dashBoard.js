import React, { Component } from 'react';
import PokemonList from '../pokemon/pokemonList';
import Menubar from '../layout/menubar'; // dont need this?



export default class DashBoard extends Component {
    render() {
        return (
            <div className='container'>
            <div className ="row">
                <div className="col">
                   
                    <PokemonList/>
                     
                </div>
            </div>
            </div>
        )
    }
}
