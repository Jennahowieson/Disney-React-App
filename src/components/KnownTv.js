import React from 'react';

const KnownTv = ({ KnownTv }) => {
    const chosenRandomCharacterTv = KnownTv.length > 0 ? [KnownTv].toString() : "No known Tv Shows"

    return (
        <div id="filmInfo">
            <h3>TV Shows:</h3>
            <p>{chosenRandomCharacterTv}</p>
        </div>
    )
}
export default KnownTv;
