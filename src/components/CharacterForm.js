import React, { useState } from 'react';

const CharacterForm = ({ onSubmit }) => {

    const [randomCharacterId, setRandomCharacterId] = useState("");

    const handleCharacterChange = (event) => {
        let newCharacterId = { randomCharacterId }
        newCharacterId = event.target.value
        setRandomCharacterId(newCharacterId);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(randomCharacterId);
    }

    return (
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="randomCharacter">Choose a number </label>
                <div>
                <input
                    name="randomCharacter"
                    type="text"
                    value={randomCharacterId}
                    onChange={handleCharacterChange}
                    max="7526"
                    placeholder="1 - 7526"
                    id='numberInput'
                />
                <input id='input'
                    type='submit'
                    value='submit'
                />
                </div>
            </form>
    )
}

export default CharacterForm;