import React from 'react'

const CharacterItem = () => {
    return (
        <div className="card" id={props.key}>
            <img src={props.image} alt={props.name} className="card__img"></img>
            <div className="card__details" >
                <h2>{props.name}</h2>
                   
            </div>

        </div>
    )
  }
  
  export default CharacterItem;