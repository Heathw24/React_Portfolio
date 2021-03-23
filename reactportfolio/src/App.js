
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import React, { Component } from "react"
import Display from './components/display';


class App extends Component {
  constructor(props) {
  
  super(props);
  this.state = {
    show: "About"
  };


}

 setAbout = (event) => {
   this.setState({
    show: "About"
   });
 }

 setProj = (event) => {
  this.setState({
   show: "Project"
  });
}

setCont = (event) => {
  this.setState({
   show: "Contact"
  });
}
 




  render() {

  
  return (
    <div className="App">
      <Header setAbout={this.setAbout} setProj={this.setProj} setCont={this.setCont}/>
      <main className="site-main">
        <Display show={this.state.show}/>
      </main>
      <Footer/>
    </div>
  );

  }
}

export default App;
