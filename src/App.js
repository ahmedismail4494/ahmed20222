
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Certificate from './components/Certificate/Certificate';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/'  element={ <Home /> } />
        <Route path='/ahmed2022/'  element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/certificate' element={ <Certificate /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
