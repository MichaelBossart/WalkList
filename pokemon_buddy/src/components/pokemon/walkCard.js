import React, { Component } from 'react'
import axios from 'axios';
import { async } from 'q';

export default class WalkCard extends Component {
    state = {
        distance:0
      };
      
        
    // state={
    //     name:'',
    //     pokemonIndex:'',
    //     imageUrl:''
    // };

    // async componentDidMount(){
    //     const {pokemonIndex} = this.props.match.params;

    //     const pokemonUrl =`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

    //     const pokemonRes = await axios.get(pokemonUrl);

    //     const name = pokemonRes.data.name;
    //     this.setState({name})
    // }

    componentDidMount(){
        const foundCandy = this.props.distance.find(function(pokemonDistance){
            console.log('pokemonDistance', pokemonDistance)
            return pokemonDistance.pokemon_id == this.props.pokemon.pokemon_id;
        })
        console.log('his.props.distance', this.props.distance)
        // this.setState({distance:foundCandy.distance})
    }

    deleteOffWalkList=async()=>{
        console.log('delete function')
        const walkListRes = await axios.delete(`/walkList/${this.props.pokemon.id}`)
        this.props.updateWalkList(walkListRes.data)
    }
        // possible way of rendering distance --> {distanceFNC(id)}
    render() {
        const foundCandy = this.props.distance.find((pokemonDistance)=>{
            return pokemonDistance.pokemon_id == this.props.pokemon.pokemon_id;
        })
        let distance = null;
        if(foundCandy){
            distance = foundCandy.distance;
        }


        return (
            <div className="" >
               <div className ="WalkCard-box">
               <div className="WalkCard-header">
                <h1 className="walkCard-name"># {this.props.pokemon.pokemon_id} {this.props.pokemon.pokemon_name}</h1>
                <h4  className="distance"> {distance} Km per candy !</h4>
                <div className ="side_box">
                
                 
      
                </div> 
                </div>
                <img className="walkListImage" src={this.props.pokemon.pokemon_url}/>
                    <div className="bottomOfCard">
                     <button className="WalkButton" onClick={this.deleteOffWalkList}> Walked</button>
                    </div>
                </div>
            
                
            </div>
        )
    }
}
