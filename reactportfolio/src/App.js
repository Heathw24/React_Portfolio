
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import AboutMe from './components/aboutMe'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="site-main">
        <AboutMe/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
