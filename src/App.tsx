// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.tsx
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Swipe from './pages/Swipe';
import Messages from './pages/Messages';
import Activities from './pages/Activities';
import Profile from './pages/Profile';
import VideoCall from './pages/VideoCall';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/swipe" element={<Swipe/>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/video-call" element={<VideoCall/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


