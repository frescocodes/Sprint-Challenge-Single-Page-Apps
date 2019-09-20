import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ chars, setChars] = useState([]);
  console.log("chars state => ", chars)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response)
      const characterData = response.data.results;
      console.log("characterData => ", characterData) 
      setChars(characterData) 
    })
    .catch(error => {
      console.log("broken => ", error)
    })
  }, []);

  return (
    // <section className="character-list">
    //   <h2>TODO: map over your state here!</h2>
    // </section>
    <>
    <h1>Character List</h1>
    <SearchForm />
    <section id="character-cards">
    {chars.map((character, i) => {
      return (
        <CharacterCard
        key={i}
        name={character.name}
        origin={character.origin.name}
        portrait={character.image}
        status={character.status}
        species={character.species} />
      )
    })}
    </section>
    </>
  );
}
