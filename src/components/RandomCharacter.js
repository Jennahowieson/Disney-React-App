import React from 'react';

const RandomCharacter = ({ randomCharacter }) => {
    const chosenRandomCharacterName = randomCharacter.name
    const imageUrl = randomCharacter.imageUrl

    return (
        <div>
                <h3>Your Random Character Is: {chosenRandomCharacterName}</h3>
                <img src={imageUrl} alt='thumbnail of character'/>
        </div>
    )
}
export default RandomCharacter;