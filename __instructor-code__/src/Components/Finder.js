import React, {Component} from 'react';
import Grass from './Grass';
import axios from 'axios';

class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            wildPokemon: []
        }
    }

    componentDidMount(){
        this.refreshPokemon();
    }

    refreshPokemon = () => {
        axios.get('/api/wild-pokemon').then(res => {
            this.setState({wildPokemon: res.data})
        }).catch(err => console.log(err));
    }

    render(){
        const mappedPokemon = this.state.wildPokemon.map((pokemon, i) => {
            return (
                <Grass 
                    key={i}
                    pokemon={pokemon}
                    catchFn={this.props.catchFn}
                    refreshFn={this.refreshPokemon}/>
            )
        })
        return(
            <div className="finder">
                {mappedPokemon}
            </div>
        )
    }
}

export default Finder;