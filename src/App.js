import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Romantic: [
    { name: " Sita Ramam", rating: "8.6/10" },
    { name: "Dilwale Dulhaniya Le Jayenge", rating: "8.0/10" },
    { name: "Hum Tum", rating: "7.0/10" }
  ],

  Drama: [
    {
      name: "The Shawshank Redemption",
      rating: "9.3/10"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "7.6/10"
    },
    {
      name: "Rand De Basanti",
      rating: "8.1/10"
    }
  ],
  Action: [
    {
      name: "K.G.F: Chapter 1",
      rating: "8.2/10"
    },
    {
      name: "Baahubali: The Beginning",
      rating: "8.0/10"
    },
    {
      name: "Bahuballi 2: The Conclusion",
      rating: "8.2/10"
    }
  ];

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎦 goodmovies </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "100%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
