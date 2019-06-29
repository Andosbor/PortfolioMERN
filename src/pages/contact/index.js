import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar';
import "./styles.css";

const Contact = (props) => {
    return (
       
            
       
       
            
            
<div id="main-container" class="container">
    <section class="main-section">
      <h1>Contact</h1>

      <form id="contact-form">
        <ul/>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/andrew-osborn-a14219122/">Andrew Osborn</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/Andosbor">Andosbor</a>
          </li>
          <li>
            Email: andrewosborn101@gmail.com
          </li>
          <li>
            Phone Number: 512-826-0153
          </li>
    
      </form>

    </section>

  </div>

  );
}

export default Contact;
