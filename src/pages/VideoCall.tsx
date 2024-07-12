import React from 'react';

const VideoCall: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Panda</h1>
        <div className="flex items-center gap-4">
          <button className="text-gray-500">
            Full screen
            <i className="fas fa-expand ml-2"></i>
          </button>
        </div>
      </header>
      <div className="flex flex-1 p-4">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              className="rounded-lg w-full h-full object-cover"
              src="path_to_image_1"
              alt="Emma Watson"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-semibold">Emma Watson</span>
              <i className="fas fa-microphone-slash text-gray-500"></i>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <img
              className="rounded-lg w-full h-full object-cover"
              src="path_to_image_2"
              alt="Rick Grimes"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-semibold">Rick Grimes</span>
              <i className="fas fa-microphone-slash text-gray-500"></i>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-4 ml-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Chat</h2>
            <button className="text-blue-500">
              Attendee <span className="text-gray-500">13</span>
            </button>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto h-96 mb-4">
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_1"
                alt="Rick Grimes"
              />
              <div>
                <h3 className="font-semibold">Rick Grimes</h3>
                <p>Hi Team 👋</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_2"
                alt="Emma Watson"
              />
              <div>
                <h3 className="font-semibold">Emma Watson</h3>
                <p>Hi Guys Can 😄, you hear me?</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_3"
                alt="Kristin Watson"
              />
              <div>
                <h3 className="font-semibold">Kristin Watson</h3>
                <p>Hi Everyone! Let get started. dont forget to make a note. ✍️</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_4"
                alt="Jane Cooper"
              />
              <div>
                <h3 className="font-semibold">Jane Cooper</h3>
                <p>Before it, I share the main document</p>
                <div className="bg-gray-200 p-2 rounded-md mt-2">
                  <i className="fas fa-file-alt text-gray-500 mr-2"></i>
                  New template.fig <span className="text-gray-500">128 mb</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_5"
                alt="Robert Fox"
              />
              <div>
                <h3 className="font-semibold">Robert Fox</h3>
                <p>Before it, I share the main document</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-md"
              placeholder="Type your message..."
            />
            <button className="p-2 bg-blue-500 text-white rounded-md">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-white p-4 flex justify-center items-center gap-4 shadow-md">
        <button className="p-3 bg-gray-200 rounded-full">
          <i className="fas fa-cog"></i>
        </button>
        <button className="p-3 bg-gray-200 rounded-full">
          <i className="fas fa-video"></i>
        </button>
        <button className="p-3 bg-gray-200 rounded-full">
          <i className="fas fa-microphone"></i>
        </button>
        <button className="p-3 bg-red-500 text-white rounded-full">
          <i className="fas fa-phone-slash"></i>
        </button>
        <button className="p-3 bg-gray-200 rounded-full">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </footer>
    </div>
  );
};

export default VideoCall;
