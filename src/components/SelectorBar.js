import React from 'react';

const SelectorBar = ({handleSelectChange, charactersApi}) =>{
  return (
    <div>
      <h1>Character Finder</h1>
      <select onChange={handleSelectChange}>
        {charactersApi.map (apiList => {
          return <option key={apiList.name} value={apiList.url}>{apiList.name}</option>
        })}
      </select>
    </div>
  );
};

export default SelectorBar;
