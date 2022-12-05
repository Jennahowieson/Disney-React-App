import React from 'react';

const KnownFilms = ({ knownFilms }) => {
    const chosenRandomCharacterFilms = knownFilms.length > 0 ? [knownFilms].toString() : "No known films" 

            return (
                <div id="filmInfo"> 
                <h3>Films:</h3>
                <b><p>This Character is in {knownFilms.length} films</p></b>
                <p>{chosenRandomCharacterFilms}</p>
                </div>
            )
        }
        export default KnownFilms;
