import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar';
import psychicGame from '../../assets/images/technics-q-c-640-480-1.jpg';
import cryptidX from '../../assets/images/thomas-griesbeck-149034-unsplash.png';
import triviaGame from '../../assets/images/burgers3.jpg';
import gameSearch from '../../assets/images/banjo.jpg';
import skyQ from '../../assets/images/background4.jpeg';
import scAvengers from '../../assets/images/scAvengersPic.png';

import "./styles.css";

const Portfolio = (props) => {
    return (
                
<div id="main-container" className="container portfolio-container">
    <section className="main-section portfolio-section">
      <h1>Portfolio</h1>

      <div className="work">
        <a href = "https://andosbor.github.io/Psychic-Game/"> <img src={psychicGame} alt="Psychic Game"/></a>

        <h3>Psychic Game</h3>
      </div>
      
      <div className="work">
        <a href = "https://thawing-dusk-95690.herokuapp.com/"> <img class="cryptidX" src={cryptidX} alt="CryptidX"/></a>

        <h3>CryptidX</h3>
      </div>
      <div className="work">
        <a href = "https://andosbor.github.io/TriviaGame/"><img src={triviaGame} alt="Trivia Game"/></a>

        <h3>Trivia Game</h3>
      </div>
      <div className="work">
        <a href = "https://andosbor.github.io/GifTastic/"> <img src={gameSearch} alt="GifTastic"/> </a>

        <h3>Game Search</h3>
      </div>
      <div className="work">
        <a href = "https://andosbor.github.io/project_number_one/"><img src={skyQ} alt="skyQ"/></a>

        <h3>skyQ</h3>
      </div>
      <div className="work">
        <a href = "https://scavenger19.herokuapp.com/"> <img src={scAvengers} alt="ScAvengers"/></a>

        <h3>ScAvengers</h3>
      </div>
      <div className="work">
        <h2>Links to GitHub code:</h2>
        <a href="https://github.com/Andosbor/Psychic-Game">Psychic Game</a> /
        <a href="https://github.com/Andosbor/unit-4-game2">Gem collector</a> /
        <a href="https://github.com/Andosbor/TriviaGame">Trivia Game</a> /
        <a href="https://github.com/Andosbor/GifTastic">GifTastic</a> /
        <a href="https://github.com/Andosbor/project_number_one">skyQ</a> /
        <a href="https://github.com/Andosbor/liri-node-app">Liri</a> /
        <a href="https://github.com/Andosbor/bamazon">Bamazon</a> /
        <a href="https://github.com/Andosbor/Friend-Finder">Friend-Finder</a> /
        <a href="https://github.com/Andosbor/burger">Burgers</a> /
        <a href="https://github.com/Andosbor/ClickyGame">ClickyGame</a> /
        <a href="https://github.com/NicoP93/project2">CryptidX</a> /
        <a href="https://github.com/lynnjamin/Scavenger">ScAvengers</a>

      </div>
      
    </section>

  </div>

  );
}

export default Portfolio;