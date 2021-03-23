import React, { Component } from "react"; 
import projectsList from "../projectsList.json";
import ProjectCards from "./projectCard";




class Projects extends Component {


    render() {
         return(
             <div>
                <section className="mainSection">
                <h2 className="sectionTitle">Projects</h2>
                <div id="projectSec">
                 {projectsList.map((p) => <ProjectCards key={p.id} name={p.name} tech={p.tech} href={p.href} />)}
                </div>
                </section>
             </div>


         );






    }




}

export default Projects;

