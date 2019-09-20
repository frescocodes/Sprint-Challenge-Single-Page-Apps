import React, { useState } from "react";


export default function SearchForm() {
  
  const [ filter, setFilter ] = useState("");
  const handleChange = (event) => {
    setFilter(event.target.value)
    console.log(filter)
  }

  return (
    <section className="search-form">
     <input type="text" placeholder="Search by name..." onChange={handleChange}/>
    </section>
  );
}
