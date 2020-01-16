import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Finder from './Components/Finder';
import Pokedex from './Components/Pokedex';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonCaught: []
    }
    this.catchPokemon = this.catchPokemon.bind(this);
    this.rename = this.rename.bind(this);
    this.releasePokemon = this.releasePokemon.bind(this);
  }

  catchPokemon(body){
    axios.post('/api/pokemon', body).then(res => {
      this.setState({pokemonCaught: res.data});
    }).catch(err => console.log(err));
  }

  rename(id, body){
    axios.put(`/api/pokemon/${id}`, body).then(res => {
      this.setState({pokemonCaught: res.data})
    }).catch(err => console.log(err))
  }

  releasePokemon(id){
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.setState({pokemonCaught: res.data})
    }).catch(err => console.log(err))
  }

  render(){
    // console.log(this.state.pokemonCaught)
    return (
      <div className="App">
        <Header />
        <Finder catchFn={this.catchPokemon}/>
        <h2>Pokedex</h2>
        <Pokedex 
          pokemonList={this.state.pokemonCaught}
          renameFn={this.rename}
          releaseFn={this.releasePokemon}/>
      </div>
    )
  }
}

export default App;