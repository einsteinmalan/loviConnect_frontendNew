import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center p-4 lg:p-10">
      <div className="bg-white rounded-lg shadow-lg w-full lg:w-3/4 overflow-hidden">
        <header className="p-6 bg-purple-600 text-white flex justify-between items-center">
          <h1 className="text-3xl font-bold">Lucas Yaw</h1>
          <div className="flex items-center">
            <span className="text-lg mr-4">Kasoa, Ghana</span>
            <img
              className="rounded-full h-12 w-12 object-cover"
              src="path_to_profile_image"
              alt="Imane Berada"
            />
          </div>
        </header>
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
          
            <main className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Settings</h2>
              <div className="mb-6">
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-purple-500 text-white rounded-md">Personal Information</button>
                  <button className="px-4 py-2 bg-gray-200 rounded-md">Password Change</button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <label className="block mb-2">First name</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2">Last name</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2">Username</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" />
                </div>
                <div className="col-span-1 lg:col-span-3">
                  <label className="block mb-2">Bio</label>
                  <textarea className="w-full p-2 border rounded-md"></textarea>
                </div>
                <div className="col-span-1 lg:col-span-3">
                  <label className="block mb-2">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-200 rounded-md">Music</span>
                    <span className="px-3 py-1 bg-yellow-200 rounded-md">Coffee</span>
                    <span className="px-3 py-1 bg-pink-200 rounded-md">Write</span>
                    <span className="px-3 py-1 bg-red-200 rounded-md">Cycling</span>
                    <span className="px-3 py-1 bg-blue-200 rounded-md">Road</span>
                    <span className="px-3 py-1 bg-purple-200 rounded-md">Design</span>
                    <span className="px-3 py-1 bg-orange-200 rounded-md">Hiking</span>
                    <span className="px-3 py-1 bg-red-300 rounded-md">Painting</span>
                  </div>
                </div>
                <div className="col-span-1 lg:col-span-3 flex justify-between">
                  <div>
                    <label className="block mb-2">I am a</label>
                    <div className="flex gap-4">
                      <button className="px-4 py-2 border rounded-md">Male</button>
                      <button className="px-4 py-2 border rounded-md">Female</button>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2">Sexual preferences</label>
                    <div className="flex gap-4">
                      <button className="px-4 py-2 border rounded-md">Male</button>
                      <button className="px-4 py-2 border rounded-md">Female</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 bg-purple-500 text-white rounded-md">Update</button>
                <button className="px-6 py-2 bg-gray-200 rounded-md">Cancel</button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
