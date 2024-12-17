import MainPage from './components/main_page';
import StargazingEvent from './components/StargazingEvent';
import Lectures from './components/lectures';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import {useEffect} from 'react';
function App() {
  useEffect(() => {
    // Create the cursor trail element
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    // Update cursor position on mouse move
    const handleMouseMove = (e) => {
      cursorTrail.style.left = `${e.pageX}px`;
      cursorTrail.style.top = `${e.pageY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(cursorTrail);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/stargazingevent' element={<StargazingEvent/>} />
            <Route path='/lectures' element={<Lectures/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
