import WelcomePage from'./user/Navcomponents/WelcomePage.js';
import About from './user/Navcomponents/About.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './user/NavBar.js';


function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path='/welcomepage' element={<WelcomePage />} />
        <Route path='/welcomepage'element={<WelcomePage/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
