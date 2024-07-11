import React from 'react';

const Swipe: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
     
      <main className="flex-1 p-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <img
            className="rounded-lg w-full h-96 object-cover mb-4"
            src="path_to_main_image"
            alt="Main"
          />
          <div className="flex gap-2">
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src="path_to_image_1"
              alt="Sub 1"
            />
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src="path_to_image_2"
              alt="Sub 2"
            />
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src="path_to_image_3"
              alt="Sub 3"
            />
            <img
              className="w-20 h-20 object-cover rounded-lg"
              src="path_to_image_4"
              alt="Sub 4"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-semibold">Emilia, 23</h1>
              <p className="text-gray-500">London • 3km</p>
            </div>
            <div className="flex items-center">
              <span className="ml-2 text-green-500">•</span>
            </div>
          </div>
          <p className="text-xl mb-4">"I am so beautiful and I am waiting for a prince"</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
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
        </div>
      </main>
    </div>
  );
};

export default Swipe;
