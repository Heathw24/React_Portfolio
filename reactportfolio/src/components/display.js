import AboutMe from './aboutMe'
import Contact from './contact'
import Projects from './projects'
import React, { Component, useState } from "react"

function Display(props) {

   


     
        if (props.show === "About"){
            return <AboutMe/>;
          }
          else if (props.show === "Project"){
            return <Projects/>;
          }
          else if (props.show === "Contact"){
            return <Contact/>;
          }


        };



export default Display;