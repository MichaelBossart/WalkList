import React, { Component } from 'react'
import Menubar from './menubar'
import WalkCard from '../pokemon/walkCard'
import axios from 'axios'
import PokemonCard from '../pokemon/pokemonCard';
export default class WalkList extends Component {
    state={
        walkList:[],
        distance:[]
    }
//db stuff here? 


    updateWalkList = (param)=>{
        this.setState({walkList: param})
    }

    async componentDidMount(){ 
        const res = await axios.get('/walkList');
        this.setState({walkList: res.data });
        
        const distance = await axios.get('/getCandy');
        console.log('distance', distance.data)
        this.setState({distance: distance.data})
        //js find function
       
    }
    render() {
        console.log(this.state.walkList)
        return (
            <div className='container'>
            <div>
                
               
               {this.state.walkList.map(pokemon =>(
                   <WalkCard
                    updateWalkList={this.updateWalkList}
                   pokemon={pokemon}
                key={pokemon.id}
                 distance ={ this.state.distance}
                   />
               ))}
            </div>
            </div>
        )
    }
}
