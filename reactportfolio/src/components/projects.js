import React, { Component } from "react"; 
import projectsList from "../projectsList.json";
import ProjectCards from "./projectCard";




class Projects extends Component {


    render() {
         return(
             <div>
                <section className="mainSection">
                <h2 className="sectionTitle">Projects</h2>
                <h2>Click on the links below to view the projects live or click the GitHub links to view the repositories!</h2>
                <div id="projectSec">
                 {projectsList.map((p) => <ProjectCards key={p.id} name={p.name} tech={p.tech} href={p.href} imagePath={p.imagePath} repo={p.repo}/>)}
                </div>
                </section>
             </div>


         );






    }




}

export default Projects;

