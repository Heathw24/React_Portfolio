
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import AboutMe from './components/aboutMe'
import Contact from './components/contact'
import Projects from './components/projects'
import React, { Component } from "react"
import ReactDOM from "react-dom"

class App extends Component {
  constructor() {
  
  super();
  this.state = {
    show: "About"
  }
}

 setAbout() {
   this.setState({
    show: "About"
   })
 }

 setProj() {
  this.setState({
   show: "Project"
  })
}

setCont() {
  this.setState({
   show: "Contact"
  })
}

  render() {

  
  return (
    <div className="App">
      <Header/>
      <main className="site-main">
        <AboutMe onclick1={this.setAbout} onclick2={this.setProj} onclick3={this.setCont}/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );

  }
}

export default App;
