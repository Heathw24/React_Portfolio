import React, { Component } from "react";


class ProjectCards extends Component {

    render() {
    return (
        <div key={this.props.id}>
           <a href={this.props.href} className="otherProj" >
           <div className="projectCard" id="pro1">
             <div className="cardtext">
                <h3>{this.props.name}</h3>
                <span>{this.props.tech}</span>
             </div>
           </div>
         </a>
        </div>
    );

    }


}

export default ProjectCards;