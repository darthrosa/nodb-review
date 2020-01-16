import React from 'react';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    return (
        <div className="pokedex">
            {props.pokemonList.map((element) => {
                return (
                    <Pokemon 
                        key={element.id}
                        name={element.name}
                        img={element.img}
                        id={element.id}
                        renameFn={props.renameFn}
                        releaseFn={props.releaseFn}/>
                )
            })}
        </div>
    )
}

export default Pokedex;