import React from 'react'

const CharacterItem = (props) => {
    return (
        <div className="card" key={props.id}>
            <img src={props.img} alt={props.name} className="card__img"></img>
            <div className="card__details" >
                <h2>{props.name}</h2>   
                <p>{`${props.nickname} appears in ${props.appearance.length} seasons of Breaking Bad`}</p> 
            </div>

        </div>
    )
  }
  
  export default CharacterItem;