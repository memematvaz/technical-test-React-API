import React from 'react'

const CharacterItem = ({char_id, img, name, nickname, appearance}) => {
    return (
        <div className="card" key={char_id}>
            <img src={img} alt={name} className="card__img"></img>
            <div className="card__details" >
                <h2>{name}</h2>   
                {appearance === null ? <p>{`${nickname} only appears in Better Call Saul`}</p>  : <p>{`${nickname} appears in ${appearance.length} seasons of Breaking Bad`}</p> }
                
            </div>

        </div>
    )
  }
  
  export default CharacterItem;