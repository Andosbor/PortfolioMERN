import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar';
import "./styles.css";

const Home = (props) => {
    return (
       
            
       
        <div>
            
            <body>

            {/* <header id="masthead">
                <div class="container">
                <a href="index.html" id="logo">Andrew Osborn</a>
                <nav>
                    <a href="index.html">About</a>
                    <a href="portfolio.html">Portfolio</a>
                    <a href="contact.html">Contact</a>
                    <a href="assets/images/Andrew Osborn Resume.pdf">Resume</a>
                </nav>
                </div>
            </header> */}

            <div id="main-container" class="container">
                <section class="main-section">
        
                <h1>About Me</h1>

                <img src="./assets/images/myFace.jpg" class="auth-image" alt="Andrew Osborn"/>

                <p>I’m a big creator in the world of media. I graduated from the school of Electronic Media and Communication where I obtained a wealth of knowledge surrounding all media.</p>

                <p>I took an internship at an Austin radio station where I received experience sampling all the roles that make up radio. I’ve created many videos myself and edited many others for freelance work with a fun gaming setting.</p>

                <p>Now, I’m really taking a dive into what makes up all of this media by going into a rigorous coding boot camp where I can learn to create whatever I want.</p>

                </section>

            </div>

            <footer>
                <div class="container">
                Copyright &copy; 
                </div>
            </footer>
            </body>

        </div>
    );
}

export default Home;