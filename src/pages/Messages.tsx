import React from 'react';

const Messages: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <aside className="bg-white w-full lg:w-1/4 p-4 shadow-md">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold">Active Users</h2>
          <i className="fas fa-ellipsis-v ml-auto"></i>
        </div>
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full p-2 border rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">All Chats</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_1"
              alt="Hamed"
            />
            <div>
              <h4 className="font-semibold">Hamed</h4>
              <p className="text-sm text-gray-600">Thank you very much, I am wai...</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">12:35 PM</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_2"
              alt="Daria"
            />
            <div>
              <h4 className="font-semibold">Daria</h4>
              <p className="text-sm text-gray-600">Call ended</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">12:35 PM</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_3"
              alt="Lisa Party"
            />
            <div>
              <h4 className="font-semibold">Lisa Party</h4>
              <p className="text-sm text-gray-600">What time are we there?</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">9:12 AM</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_4"
              alt="Jack"
            />
            <div>
              <h4 className="font-semibold">Jack</h4>
              <p className="text-sm text-gray-600">You: I will send you the work file</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">9:00 AM</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_5"
              alt="Kate"
            />
            <div>
              <h4 className="font-semibold">Kate</h4>
              <p className="text-sm text-gray-600">You: I will send you the work file</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">7:10 PM</span>
          </div>
          <div className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_6"
              alt="Lisa"
            />
            <div>
              <h4 className="font-semibold">Lisa</h4>
              <p className="text-sm text-gray-600">You: I will send you the work file</p>
            </div>
            <span className="ml-auto text-sm text-gray-500">7:10 PM</span>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-4 flex flex-col">
        <div className="bg-white p-4 shadow-md rounded-t-lg flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_1"
              alt="Hamed"
            />
            <div>
              <h4 className="font-semibold">Hamed</h4>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-500">
              <i className="fas fa-phone"></i>
            </button>
            <button className="text-gray-500">
              <i className="fas fa-video"></i>
            </button>
            <button className="text-gray-500">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
        <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_1"
                alt="Hamed"
              />
              <div>
                <p className="bg-white p-2 rounded-md shadow">Hi there, How are you?</p>
                <span className="text-xs text-gray-500">12:24 PM</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_1"
                alt="Hamed"
              />
              <div>
                <p className="bg-white p-2 rounded-md shadow">
                  Waiting for your reply. As I have to go back soon. I have to travel long distance.
                </p>
                <span className="text-xs text-gray-500">12:25 PM</span>
              </div>
            </div>
            <div className="flex items-start gap-4 ml-auto">
              <div>
                <p className="bg-blue-500 text-white p-2 rounded-md shadow">
                  Hi, I am coming there in few minutes. Please wait!! I am in taxi right now.
                </p>
                <span className="text-xs text-gray-500">12:28 PM</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_1"
                alt="Hamed"
              />
              <div>
                <p className="bg-white p-2 rounded-md shadow">
                  Thank you very much, I am waiting here at Starbucks cafe.
                </p>
                <span className="text-xs text-gray-500">12:35 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-md rounded-b-lg flex items-center gap-4">
          <button className="text-gray-500">
            <i className="fas fa-smile"></i>
          </button>
          <input
            type="text"
            className="flex-1 p-2 border rounded-md"
            placeholder="Type a message"
          />
          <button className="text-gray-500">
            <i className="fas fa-paperclip"></i>
          </button>
          <button className="text-blue-500">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </main>
      <aside className="bg-white w-full lg:w-1/4 p-4 shadow-md">
        <div className="flex flex-col items-center mb-4">
          <img
            className="h-20 w-20 rounded-full object-cover mb-4"
            src="path_to_user_image_1"
            alt="Hamed"
          />
          <h4 className="font-semibold text-xl">Hamed</h4>
          <p className="text-gray-500">Online</p>
          <div className="flex gap-4 mt-4">
            <button className="text-gray-500">
              <i className="fas fa-phone"></i>
            </button>
            <button className="text-gray-500">
              <i className="fas fa-video"></i>
            </button>
            <button className="text-gray-500">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <h5 className="font-semibold mb-2">About</h5>
          <p className="text-gray-600">Hello, my name is Hamed...</p>
        </div>
        <div className="mb-4">
          <h5 className="font-semibold mb-2">Media, links and docs</h5>
          <div className="flex gap-2">
            <img
              className="h-16 w-16 rounded-md object-cover"
              src="path_to_media_1"
              alt="Media 1"
            />
            <img
              className="h-16 w-16 rounded-md object-cover"
              src="path_to_media_2"
              alt="Media 2"
            />
            <img
              className="h-16 w-16 rounded-md object-cover"
              src="path_to_media_3"
              alt="Media 3"
            />
            <img
              className="h-16 w-16 rounded-md object-cover"
              src="path_to_media_4"
              alt="Media 4"
            />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <span className="font-semibold mr-2">Mute notifications</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="mb-4">
          <h5 className="font-semibold mb-2">Disappearing messages</h5>
          <p className="text-gray-600">Off</p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="text-red-500">Block Hamed</button>
          <button className="text-red-500">Report Hamed</button>
          <button className="text-red-500">Delete chat</button>
        </div>
      </aside>
    </div>
  );
};

export default Messages;
