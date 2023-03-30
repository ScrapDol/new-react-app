import './App.css';
import { AboutMe } from './components/AboutMe';
import {Firstscreen} from './components/Firstscreen'
import { Portfolio } from './components/Portfolio';
import { Mail } from './components/Mail';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Firstscreen />
      <AboutMe />
      <Portfolio />
      <Mail/>
      <Footer/>
    </div>
  );
}

export default App;
