import WelcomePage from'./user/Navcomponents/WelcomePage.js';
import About from './user/Navcomponents/About.js';
import MarsPhotos from './user/Navcomponents/MarsPhotos.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './user/NavBar.js';
import MarsRover from './user/Navcomponents/MarsRover.js';
import MarsMoons from './user/Navcomponents/MarsMoons.js';


function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path='/welcomepage' element={<WelcomePage />} />
        <Route path='/welcomepage'element={<WelcomePage/>} />
        <Route path='/about' element={<About />} />
        <Route path='/marsmoons' element={<MarsMoons/>} />
        <Route path='/marsphoto' element={<MarsPhotos/>} />
        <Route path='/marsrover' element={<MarsRover/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
