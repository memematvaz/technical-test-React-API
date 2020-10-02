import { useState, useEffect } from 'react';

const useInitialState = (ENDPOINT) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(ENDPOINT)
            .then(response => response.json())
            .then(data => setCharacters(data))
    }, []);
    return characters;
}

export default useInitialState;