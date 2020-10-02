import React from 'react'

const CharacterDetails = ({image, name, }) => {
    return (
        <div className="details" id={props.key}>
            <img src={props.image} alt={props.name} className="details__img"></img>
            <div className="details__text" >
                <h2>{props.characterObject.name}</h2>    
                <p>{`${props.characterObject.nickname} appears in ${props.characterObject.appearance.length}seasons`}</p>
            </div>

        </div>
    )
  }
  
  export default CharacterDetails;