import React from "react";
import { Route, Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <div>
          <h1>Welcome to the ultimate fan site!</h1>
          <Link to="/character-list">Visit the Character Page</Link>
        </div>
        
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
