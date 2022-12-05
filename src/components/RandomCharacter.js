import React from 'react';

const RandomCharacter = ({ randomCharacter }) => {
    const chosenRandomCharacterName = randomCharacter.name
    const imageUrl = randomCharacter.imageUrl

    return (
        <div>
                <h3>Your Random Character Is: </h3>
                    <p><b>{chosenRandomCharacterName}</b></p>
                <img src={imageUrl} alt='thumbnail of character'/>
        </div>
    )
}
export default RandomCharacter;