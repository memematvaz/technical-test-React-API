import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
    
    const [characters, setCharacters] = useState([]);
    const ENDPOINT = 'https://breakingbadapi.com/api/characters'

    useEffect(() => {
        fetch(ENDPOINT)
            .then(response => response.json())
            .then(data => setCharacters(data))
    }, []);

    console.log(characters)
    return (
    <>  
        <Filter/>
        <ul className="characterlist">
            {characters.map(characterObject => 
                <li className="characterlist__item" key={characterObject.char_id}>
                    <CharacterItem  
                        id={characterObject.char_id}
                        img={characterObject.img}
                        name={characterObject.name}
                        nickname={characterObject.mickname}
                        appearance={characterObject.appearance}/>
                </li>
            )}
        </ul>
    </>
    )
}

export default CharacterList;