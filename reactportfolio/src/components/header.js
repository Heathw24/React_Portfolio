import React, { Component } from "react";

class Header extends Component {

    render() {
    return(
    <div className="start-sidebar">
        
     
        <div className="start-sidebar-inner">
          <div href="#" class="personal">
                <div className="person-avatar">
                    <img src="assets/img/MaybeUse.jpg" alt="me" className="avatar" />
                </div>
                <div className="person-content">
                    <h1 >Heath Ward</h1>
                    <h2 >Jr Software Developer</h2>
                </div>
          </div>
            <nav className="navLinks" >
               
               <div className="navItem" onClick={this.onClick1}>About Me</div>
               <div className="navItem" onClick={this.onClick2}> Projects</div>
               <div className="navItem" onClick={this.onClick3}> Contact Me</div>
               <div className="navItem"> <a className="navText" href="https://docs.google.com/document/d/1jU8whvutQ2mb-C9YaV7fjldcDtP4W6JR/edit">Resume</a></div>
               
            </nav>
        </div>
        
        
        
    </div>
    );
    }

}

export default Header;