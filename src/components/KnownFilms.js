import React from 'react';

const KnownFilms = ({ knownFilms }) => {
    console.log([knownFilms][0].toString())
    const chosenRandomCharacterFilms = knownFilms.length > 0 ? [knownFilms][0].toString() : "No known films" 
            return (
                <div id="filmInfo"> They are known to appear in: {chosenRandomCharacterFilms}</div>
            )
        }
        export default KnownFilms;
