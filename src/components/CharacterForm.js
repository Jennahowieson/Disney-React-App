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
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="randomCharacter">Choose a number </label>
                <input
                    name="randomCharacter"
                    type="number"
                    value={randomCharacterId}
                    onChange={handleCharacterChange}
                    max="7526"
                    placeholder="1 - 7526"
                />
                <input id='input'
                    type='submit'
                    value='submit'
                />
            </form>
        </div>
    )
}

export default CharacterForm;