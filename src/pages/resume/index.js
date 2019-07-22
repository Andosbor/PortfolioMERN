import React, { Component } from "react";
import { Link } from "react-router-dom";
import DownloadLink from "react-download-link";
import { Document } from 'react-pdf/dist/entry.webpack';
import NavBar from '../../components/NavBar';
import ResumePic from '../../assets/images/technicalResumePic.png';
import "./styles.css";

const Resume = (props) =>   {

 

    return (
                    
      <div id="main-container" className="container">
          
      <section class="main-section">
        <h1>Resume</h1>
        <img src={ ResumePic } alt="Andrew Osborn Resume"/>
  
        {/* <DownloadLink
    filename={"TechnicalResume.pdf"}
    exportFile={() =>  "./TechnicalResumeAO.pdf" }
>
        Save to disk
</DownloadLink> */}

      </section>
  
    </div>

    );
  }


export default Resume;