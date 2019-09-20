import React from "react";
import styled from "styled-components";

const Card = styled.div`
  bacgkround: orange;
  margin: 0 auto;
`


export default function CharacterCard(props) {

  if (!props.name) {
    return <h1>Loading...</h1>
  }
  return (
    <Card className="card">
      <h1 className="char-name">Character: {props.name}</h1>
      <img className="char-portrait" src={props.portrait}></img>
      <h3>Origin: {props.origin}</h3>
      <h3>Species: {props.species}</h3>
      <h3>Status: {props.status}</h3>

    </Card>
  )
}
