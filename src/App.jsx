import Intro from './component/intro/Intro';
import './App.css';
import Navbar from './component/Navbar';
import Services from './component/Services/Services';
import Experience from './component/experience/Experience';
import Works from './component/Works/Works';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode ? 'black' : '',
      color : darkMode ? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
