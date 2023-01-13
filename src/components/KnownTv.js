import React from 'react';

const KnownTv = ({ KnownTv }) => {
    const chosenRandomCharacterTv = KnownTv.length > 0 ? [KnownTv].toString() : "No known Tv Shows"

    return (
        <div id="filmInfo">
            <h3>TV Shows:</h3>
            <b><p>This Character is in {KnownTv.length} Tv Shows</p></b>
            <p>{chosenRandomCharacterTv}</p>
        </div>
    )
}
export default KnownTv;
