// src/pages/Profile.tsx
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="profile-page p-6">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="profile-content bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-center">Imane Berada</h2>
        <p className="text-gray-600 text-center">Ibarada</p>
        <div className="profile-details mt-6">
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            {/* More profile details */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
