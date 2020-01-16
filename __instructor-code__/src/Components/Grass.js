import React, {Component} from 'react';

class Grass extends Component {

    catchPokemon(){
        this.props.catchFn({
            name: this.props.pokemon.name,
            img: this.props.pokemon.sprites.front_default
        })
        this.props.refreshFn();
    }

    render(){
        return(
            <div className="grass">
                <img
                    onClick={() => this.catchPokemon()} 
                    src={this.props.pokemon.sprites.front_default} 
                    alt={this.props.pokemon.name}/>
            </div>
        )
    }
}

export default Grass;