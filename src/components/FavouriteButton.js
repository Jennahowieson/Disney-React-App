import React, { useEffect, useState } from 'react';


const FavouriteButton = ({ handleFavouriteButton, randomCharacter }) => {

    const [faveCharacter, setFaveCharacterId] = useState();


    const handleFaveCharacterChange = (randomCharacter) => {
        let newFaveCharacter = { faveCharacter };
        newFaveCharacter = randomCharacter
        setFaveCharacterId(newFaveCharacter._id);
    }

    const handleButtonSubmit = (event) => {
        event.preventDefault();
        if(event.target[0].checked = true){
        handleFaveCharacterChange(randomCharacter)
        handleFavouriteButton(faveCharacter)}
    }

    return (
        <form onSubmit={handleButtonSubmit} id='favButton'>
            <input type="checkbox" value={faveCharacter} />
            <input type="submit" value="Mark As Favourite" />
        </form >
    )
}

export default FavouriteButton;
