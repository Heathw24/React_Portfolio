import React, { Component } from "react";


class ProjectCards extends Component {

  

    render() {
    return (
        <div>
           <a href={this.props.href} className="otherProj" >
           <div className="projectCard" id="pro1" style={{
             backgroundImage: `url(${this.props.imagePath})`
             }}>
             <div className="cardtext">
                <h3>{this.props.name}</h3>
                <span>{this.props.tech}</span>
             </div>
           </div>
         </a>
         <a href={this.props.repo}><img src="..\..\public\assets\img\GitHub-Mark-Light-32px.png" alt="GitHub Repo"/></a>
        </div>
    );

    }


}

export default ProjectCards;