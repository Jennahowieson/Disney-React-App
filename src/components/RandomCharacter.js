import React from 'react';

const RandomCharacter = ({ randomCharacter }) => {
    const chosenRandomCharacterName = randomCharacter.name
    const imageUrl = randomCharacter.imageUrl

    return (
        <div id='randomCharacter'>
                <img src={imageUrl} alt='thumbnail of character'/>
        </div>
    )
}
export default RandomCharacter;