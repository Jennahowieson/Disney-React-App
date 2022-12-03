import React from 'react';
import Character from './Character';

const AllCharacters = ({ charactersList, singleRandomCharacterId }) => {

    const singleCharacter = charactersList.data.map((character, index) => {
        return <Character key={index} character={character} />
    })
    const singleRandomCharacter = singleRandomCharacterId.map((randomToDisplay,index)=>{
        return <Character key={index} randomToDisplay={randomToDisplay} />
    })

    return (
        <div>
            <ul>
                {singleRandomCharacter}
            </ul>
        </div>
    )
}
export default AllCharacters;