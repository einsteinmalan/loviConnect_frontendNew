// src/components/common/Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar bg-white shadow-lg h-screen p-4">
      <div className="profile mb-6 text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full mx-auto"
        />
        <h2 className="text-xl font-semibold mt-2">Lucas Yaw</h2>
        <p className="text-gray-600">WKasoa, Amanfro</p>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/dashboard" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/swipe" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Swipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/activities" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Activities
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/video-call" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Video Call
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="block p-2 text-gray-700 hover:bg-gray-100 rounded">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
