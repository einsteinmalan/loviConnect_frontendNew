import React from 'react';

const Activities: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <header className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Your notifications</h2>
          <button className="text-blue-500">Mark all as read</button>
        </header>
        <nav className="flex mb-4">
          <button className="flex-1 py-2 text-center bg-blue-500 text-white rounded-l-md">View all</button>
          <button className="flex-1 py-2 text-center bg-gray-200">Mentions</button>
          <button className="flex-1 py-2 text-center bg-gray-200">Followers</button>
          <button className="flex-1 py-2 text-center bg-gray-200 rounded-r-md">Invites</button>
        </nav>
        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-md">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_1"
              alt="User 1"
            />
            <div className="flex-1">
              <p><strong>@thomasagnum</strong> followed you</p>
              <p className="text-sm text-gray-500">Friday 5:00pm</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
            <span className="ml-2 h-3 w-3 bg-blue-500 rounded-full"></span>
          </li>
          <li className="flex flex-col gap-2 p-4 bg-gray-50 rounded-md">
            <div className="flex items-start gap-4">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="path_to_user_image_2"
                alt="User 2"
              />
              <div className="flex-1">
                <p><strong>@s.kav</strong> commented on your post</p>
                <p className="text-sm text-gray-500">Friday 4:00pm</p>
              </div>
              <span className="text-sm text-gray-500">3 hours ago</span>
              <span className="ml-2 h-3 w-3 bg-blue-500 rounded-full"></span>
            </div>
            <p className="p-2 bg-white rounded-md shadow">Beautiful! Would love to see a tutorial on this glass effect. Keep up the good work 😍</p>
          </li>
          <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-md">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_3"
              alt="User 3"
            />
            <div className="flex-1">
              <p><strong>@holly</strong> bookmarked your post</p>
              <p className="text-sm text-gray-500">Friday 10:00am</p>
            </div>
            <span className="text-sm text-gray-500">10 hours ago</span>
            <span className="ml-2 h-3 w-3 bg-blue-500 rounded-full"></span>
          </li>
          <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-md">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="path_to_user_image_1"
              alt="User 1"
            />
            <div className="flex-1">
              <p><strong>@thomasagnum</strong> invited you to <strong>Community</strong></p>
              <p className="text-sm text-gray-500">Thursday 7:00pm</p>
              <div className="flex gap-4 mt-2">
                <button className="px-4 py-2 bg-gray-200 rounded-md">Decline</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Accept</button>
              </div>
            </div>
            <span className="text-sm text-gray-500">15 hours ago</span>
            <span className="ml-2 h-3 w-3 bg-blue-500 rounded-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Activities;
