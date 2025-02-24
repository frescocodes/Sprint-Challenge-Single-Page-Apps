import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ chars, setChars] = useState([]);
  const [ filter, setFilter ] = useState("")
  // console.log("chars state => ", chars)

  const handleChange = (event) => {
    let lower = (event.target.value).toLowerCase();
    console.log(lower);
    setFilter(lower)

  }
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response)
      const characterData = response.data.results;
      // console.log("characterData => ", characterData) 
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
      <Link to="/">Home</Link>
      <h1>Character List</h1>
      <input type="text" placeholder="Search by name..." onChange={handleChange}/>
      <section id="character-cards">
        
      {/* {chars.map((character, i) => {
        return (
          <CharacterCard
          key={i}
          name={character.name}
          origin={character.origin.name}
          portrait={character.image}
          status={character.status}
          species={character.species} />
        )
      })} */}
      {chars.map((character, i) => {
        if (filter.length > 0) {
          let newChars = chars.filter( character => {
            return character.name.toLowerCase().match(filter)
          })
        } else {
          return (
          <CharacterCard
          key={i}
          name={character.name}
          origin={character.origin.name}
          portrait={character.image}
          status={character.status}
          species={character.species} />
        )
        }
        
      })}
      </section>
    </>
  );
}
