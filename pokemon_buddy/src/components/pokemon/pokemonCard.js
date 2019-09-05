import React, { Component } from "react";
import styled from "styled-components"; //may need to replace this
import axios from "axios";



const Sprite = styled.img`
width: 5em,
height:5em,
`;

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageurl: "",
    pokemonIndex: ""
  };
 

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2]; 
    const imageurl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name: name,
      imageurl: imageurl,
      pokemonIndex: pokemonIndex
    });
  }
  addPokemon = () => {
    console.log("add pokemon function");
    
    const body = {
      pokemon_name: this.state.name,
      pokemon_url: this.state.imageurl,
      pokemon_id: this.state.pokemonIndex // add user_id: this.state.user_id
      
    };
    axios.post("/walkList", body);
    
  };
  render() {
    const { name, url } = this.props;

    return (
      <div className="col-md-3 col-sm-6 mb-5 ">
        <div className="card">
          <h5 className="cardHeader">{this.state.pokemonIndex}</h5>
          <h6 className="PokemonName">
            <h1>{this.state.name}</h1>
          </h6>
          <div className="image-button">
            <Sprite
              className="card-img-top rounded center"
              src={this.state.imageurl}
            />

            <div className="cardBody">
              <button className="WalkButton-1" onClick={this.addPokemon} >
             
                {" "}
                Add Pokemon
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
