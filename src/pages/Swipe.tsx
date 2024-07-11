import React from 'react';

const Swipe: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">

      <main className="flex-1 p-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <h1 className="text-3xl font-semibold">Emilia, 23</h1>
            <span className="ml-2 text-green-500">•</span>
          </div>
          <div className="text-gray-600">London • 3km</div>
        </div>
        <section className="bg-white rounded-lg shadow p-6">
          <img
            className="rounded-lg w-full h-80 object-cover mb-4"
            src="path_to_user_image"
            alt="Emilia"
          />
          <p className="text-xl mb-4">"I am so beautiful and I am waiting for a prince"</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Hair: black</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Growth: 165 cm</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Sociability: yes</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Orientation: hetero</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Character: kind</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Smoking: no</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Eyes: hazel</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Weight: 56 kg</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Relations: free</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>I live: alone</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>I seeking: guy</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <p>Alcohol: on holidays</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-200 rounded-md">Humor</span>
            <span className="px-3 py-1 bg-pink-200 rounded-md">Dancing</span>
            <span className="px-3 py-1 bg-green-200 rounded-md">Music</span>
            <span className="px-3 py-1 bg-yellow-200 rounded-md">Shopping</span>
            <span className="px-3 py-1 bg-orange-200 rounded-md">Comedy</span>
          </div>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 bg-red-500 text-white rounded-md">X</button>
            <button className="px-6 py-2 bg-green-500 text-white rounded-md">Message</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Swipe;
