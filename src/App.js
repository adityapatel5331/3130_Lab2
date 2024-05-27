import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';

function App() {
  const [visits, setVisits] = useState(0);

  return (
    <Router>
      
      <div className="App-header">
      <main>
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        {/* </header> */}
          <Routes>
            <Route path="/" element={<Home setVisits={setVisits} />} />
            <Route path="/about" element={<About visits={visits} />} />
            <Route path="/contact" element={<Contact visits={visits} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
