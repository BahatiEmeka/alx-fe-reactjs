import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navigation Bar Component */}
        <Routes>
          <Route path="/" element={<Home />} />           {/* Home Page Route */}
          <Route path="/about" element={<About />} />     {/* About Page Route */}
          <Route path="/services" element={<Services />} /> {/* Services Page Route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
