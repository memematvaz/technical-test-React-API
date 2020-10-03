import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';
import CharacterItem from './CharacterItem';
import FetchData from '../services/FetchData'



const CharacterList = () => {
    const characters = FetchData()

    return (
    <>  
        <Filter/>
        <ul className="characterlist">
            {characters.map(characterObject =>
                <li className="characterlist__item">
                    <CharacterItem  {...characterObject}/>
                </li>
            )}
        </ul>
    </>
    )
}

const mapStateToProps = state => {
    return{
        characters: state.characters,
    }
}

export default connect(mapStateToProps , null)(CharacterList)