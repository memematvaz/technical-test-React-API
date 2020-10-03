import { useState, useEffect } from 'react';


const FetchData = () => {
    const ENDPOINT = 'https://breakingbadapi.com/api/characters'
    
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(ENDPOINT)
            .then(response => response.json())
            .then(data => setCharacters(data))
            
    }, []);
    return characters;
}

export default FetchData;