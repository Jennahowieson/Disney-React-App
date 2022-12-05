import React, { useState, useEffect } from 'react';
import RandomCharacter from '../components/RandomCharacter';
import CharacterForm from '../components/CharacterForm';
import KnownFilms from '../components/KnownFilms';
import KnownTv from '../components/KnownTv';
import FavouriteButton from '../components/FavouriteButton';

const DisneyContainer = ({ updateCharactersApi }) => {
    const [knownFilms, findKnownFilms] = useState("Finding Films")
    const [knownTv, findKnownTv] = useState("Finding Tv Shows")
    let favouriteCharacterList = []
    const [randomCharacter, setRandomCharacter] = useState(
        {
            "_id": 4703,
            "films": [
                "Hollywood Party",
                "Fantasia",
                "Fun and Fancy Free",
                "TRON",
                "Who Framed Roger Rabbit",
                "Oliver & Company",
                "The Little Mermaid",
                "Toy Story",
                "A Goofy Movie",
                "Mickey's Once Upon a Christmas",
                "Fantasia 2000",
                "Mickey's Magical Christmas: Snowed in at the House of Mouse",
                "Mickey's House of Villains",
                "Teacher's Pet (film)",
                "The Lion King 1½",
                "101 Dalmatians II: Patch's London Adventure",
                "Mickey, Donald, Goofy: The Three Musketeers",
                "Mickey's Twice Upon a Christmas",
                "Chicken Little (film)",
                "Meet the Robinsons",
                "Wreck-It Ralph (film)",
                "Saving Mr. Banks",
                "Frozen",
                "Zootopia",
                "Ralph Breaks the Internet"
            ],
            "shortFilms": [],
            "tvShows": [
                "Walt Disney anthology series",
                "The Mickey Mouse Club",
                "The Mouse Factory",
                "Adventures of the Gummi Bears",
                "Bonkers",
                "101 Dalmatians: The Series",
                "Mickey Mouse Works",
                "House of Mouse",
                "Mickey Mouse Clubhouse",
                "Imagination Movers",
                "Mickey's Letter Time",
                "Have a Laugh!",
                "Mickey’s Mousekersize",
                "A Poem Is...",
                "Mickey Mouse (TV series)",
                "Minnie's Bow-Toons",
                "Once Upon a Time",
                "Frozen: Northern Lights",
                "At Home With Olaf",
                "Mickey Mouse Mixed-Up Adventures",
                "DuckTales (2017 series)",
                "Mickey Go Local",
                "The Wonderful World of Mickey Mouse",
                "WandaVision",
                "Mickey Mouse Funhouse"
            ],
            "videoGames": [
                "Mickey Mouse: The Computer Game",
                "Mickey Mousecapade",
                "Adventures in the Magic Kingdom",
                "Illusion (series)",
                "The Magical Quest starring Mickey Mouse",
                "Mickey Mania: The Timeless Adventures of Mickey Mouse",
                "Mickey's Speedway USA",
                "Mickey's Racing Adventure",
                "Disney's Party",
                "Disney's Magical Mirror Starring Mickey Mouse",
                "Disney's Hide and Sneak",
                "Disney Friends",
                "Kingdom Hearts (series)",
                "Epic Mickey (series)",
                "Kinect Disneyland Adventures",
                "Disney Infinity (series)",
                "Disney Magical World",
                "Disney Magical World 2",
                "Where's My Mickey?",
                "Disney Tsum Tsum (game)",
                "Disney Magical Dice",
                "Disney Heroes: Battle Mode",
                "Disney Mirrorverse",
                "Disney Sorcerer's Arena"
            ],
            "parkAttractions": [
                "Mickey and Minnie's Runaway Railway",
                "Fantasmic!",
                "Mickey's PhilharMagic",
                "Mickey's Royal Friendship Faire",
                "World of Color",
                "Main Street Electrical Parade",
                "Mickey Mouse Revue",
                "Town Square Theater",
                "Mickey's House and Meet Mickey",
                "One Man's Dream II: The Magic Lives On!",
                "Midship Detective Agency",
                "My Friend Duffy",
                "The Golden Mickeys",
                "Festival of Fantasy Parade",
                "Paint the Night Parade",
                "Mickey and the Magical Map",
                "Wonderful World of Animation"
            ],
            "allies": [],
            "enemies": [],
            "name": "Mickey Mouse",
            "imageUrl": "https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg",
            "url": "https://api.disneyapi.dev/characters/4703"
        }
    );

    useEffect(() => {
        loadCharacters('https://api.disneyapi.dev/characters/4703')
        findFilms('https://api.disneyapi.dev/characters/4703')
    }, [])

    const loadCharacters = url => {
        fetch(url)
            .then(res => res.json())
            .then(randomCharacter => setRandomCharacter(randomCharacter))
            .catch(err => console.error);
    }

    const findFilms = url => {
        fetch(url)
            .then(res => res.json())
            .then(randomCharacter => findKnownFilms(randomCharacter.films))
            .catch(err => console.error);
    }

    const findTv = url => {
        fetch(url)
            .then(res => res.json())
            .then(randomCharacter => findKnownTv(randomCharacter.tvShows))
            .catch(err => console.error);
    }


    const handleFavouriteButton = ((faveCharacter)=>{
        const favUrl = `https://api.disneyapi.dev/characters/${faveCharacter}`
        addFavCharacter(favUrl)
        console.log(favUrl)
    });

    const addFavCharacter = favUrl => {
        fetch(favUrl)
            .then(res => res.json())
            .then(faveCharacter => addNewFav(faveCharacter))
            .catch(err => console.error);
    }

    const addNewFav = ((faveCharacter)=>{
        favouriteCharacterList.push(faveCharacter)
        console.log(faveCharacter)
        console.log(favouriteCharacterList)
    });
    const showFaveList = favouriteCharacterList.map((character)=>{
       const charName = character.name 
    return(charName)
})

    const handleSubmit = randomCharacterId => {
        const newUrl = `https://api.disneyapi.dev/characters/${randomCharacterId}`
        updateCharactersApi(randomCharacterId, newUrl)
        loadCharacters(newUrl)
        findFilms(newUrl)
        findTv(newUrl)
    };

    return (
        <>
            <h1>Character Finder</h1>
            <CharacterForm onSubmit={handleSubmit} />
            <h2>Your favourite characters are:</h2>
            <ul>{showFaveList}</ul>
            <RandomCharacter randomCharacter={randomCharacter} />
            <FavouriteButton handleFavouriteButton={handleFavouriteButton} randomCharacter={randomCharacter}/>
            <div className="charInfo">
                <KnownFilms knownFilms={knownFilms} />
                <KnownTv KnownTv={knownTv} />
            </div>
        </>
    );
    }

export default DisneyContainer;