import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';  // Import UserProfile component
import Counter from './components/Counter';          // Import the Counter component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />         {/* Renders Header Component */}
      <MainContent />    {/* Renders MainContent Component */}
      <Footer />         {/* Renders Footer Component */}

      {/* Render UserProfile component with props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <WelcomeMessage /> {/* Renders WelcomeMessage Component */}
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {/* Render the new Counter component */}
      <Counter />
    </>
  );
}

export default App;