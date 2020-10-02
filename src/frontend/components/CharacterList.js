import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import CharacterItem from './CharacterItem';
import useInitialState from '../hooks/useInitialState'

const ENDPOINT = 'https://breakingbadapi.com/api/characters'

const CharacterList = () => {
    const initialState = useInitialState(ENDPOINT)
    return (
    <>  
        <Filter/>
        <ul className="characterlist">
            {initialState.map(characterObject =>
                <li className="characterlist__item">
                    <CharacterItem  {...characterObject}/>
                </li>
            )}
        </ul>
    </>
    )
}

export default CharacterList;