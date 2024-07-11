import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-purple-100">
      
      <main className="flex-1 p-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">Merhba, Imane</h1>
          <p className="text-gray-600">Welcome back, nice to see you again</p>
        </header>
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-md">Personal Information</button>
            <button className="px-4 py-2 bg-gray-200 rounded-md">Password Change</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">First name</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block mb-2">Last name</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block mb-2">Username</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full p-2 border rounded-md" />
            </div>
            <div className="lg:col-span-2">
              <label className="block mb-2">Bio</label>
              <textarea className="w-full p-2 border rounded-md"></textarea>
            </div>
            <div className="lg:col-span-2">
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
            <div className="lg:col-span-2 flex justify-between">
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
        </section>
      </main>
    </div>
  );
};

export default Settings;
