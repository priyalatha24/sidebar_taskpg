import React from 'react';
import './App.css';
import ExternalComponent from '../../reactworkspace/loginsignin_popup';

import { Header } from 'antd/es/layout/layout.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Profile from './pages/Profile.jsx';
import Contact from './pages/Profile.jsx';
import Pan from './pages/Pan.jsx';
import Insurance from './pages/Insurance.jsx';
import Issue from './pages/Issue.jsx';
import Notification from './pages/Notification.jsx';
import Setting from './pages/Setting.jsx';
import Signout from './pages/Signout.jsx';


const App = () => {
  return (
    <div className='App'>
      <div className='header'>
        <Header/>
      </div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Contact " element={<Contact />} />
            <Route path="/Pan" element={<Pan />} />
            <Route path="/Insurance" element={<Insurance />} />
            <Route path="/Issue" element={<Issue />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Signout" element={<Signout />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;
