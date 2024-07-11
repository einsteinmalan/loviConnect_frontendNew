import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <aside className="bg-white w-full lg:w-1/4 p-6 flex flex-col items-center">
        <img
          className="rounded-full h-32 w-32 object-cover"
          src="path_to_profile_image"
          alt="Floyd Miles"
        />
        <h2 className="mt-4 text-2xl font-semibold">Floyd Miles</h2>
        <p className="text-gray-600">Westheimer Rd, Santa</p>
        <div className="flex justify-between w-full mt-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">87</h3>
            <p className="text-gray-500">Friends</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">67</h3>
            <p className="text-gray-500">Likes</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">20</h3>
            <p className="text-gray-500">Matches</p>
          </div>
        </div>
        <nav className="mt-6 w-full">
          <ul className="flex flex-col gap-4">
            <li className="text-center py-2 bg-purple-200 rounded-md">Dating</li>
            <li className="text-center py-2 bg-gray-200 rounded-md">Users</li>
            <li className="text-center py-2 bg-gray-200 rounded-md">Messages</li>
            <li className="text-center py-2 bg-gray-200 rounded-md">Activity</li>
            <li className="text-center py-2 bg-gray-200 rounded-md">Profile</li>
            <li className="text-center py-2 bg-gray-200 rounded-md">Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="bg-white rounded-lg shadow p-6 col-span-2">
          <div className="relative">
            <img
              className="rounded-lg w-full h-96 object-cover mb-4"
              src="path_to_user_image"
              alt="Mabelle Keller"
            />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
              <i className="fas fa-expand"></i>
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-semibold">Mabelle Keller, 21</h1>
              <p className="text-gray-500">12 km from you</p>
            </div>
            <div className="flex gap-4">
              <button className="p-2 bg-red-500 text-white rounded-md">X</button>
              <button className="p-2 bg-green-500 text-white rounded-md">✓</button>
            </div>
          </div>
          <p className="mb-4">An interesting implication of the 2007 study concerns the use of hand sanitizers by observant Muslims. Alcohol is forbidden (haram) to Muslims.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-200 rounded-md">Travel</span>
            <span className="px-3 py-1 bg-green-200 rounded-md">Music</span>
            <span className="px-3 py-1 bg-pink-200 rounded-md">Coffee</span>
            <span className="px-3 py-1 bg-red-200 rounded-md">Dancing</span>
            <span className="px-3 py-1 bg-yellow-200 rounded-md">Netflix</span>
          </div>
        </section>
        <aside className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="path_to_user_image_1"
                  alt="Jane Cooper"
                />
                <div>
                  <h3 className="font-semibold">Jane Cooper</h3>
                  <p className="text-gray-500 text-sm">Ask CDCR San Quentin...</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">3:25</span>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="path_to_user_image_2"
                  alt="Jacob Jones"
                />
                <div>
                  <h3 className="font-semibold">Jacob Jones</h3>
                  <p className="text-gray-500 text-sm">So yes, the alcohol</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">2:25</span>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="path_to_user_image_3"
                  alt="Robert Fox"
                />
                <div>
                  <h3 className="font-semibold">Robert Fox</h3>
                  <p className="text-gray-500 text-sm">Twenty 30-second appl...</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">1:25</span>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="path_to_user_image_4"
                  alt="Cody Fisher"
                />
                <div>
                  <h3 className="font-semibold">Cody Fisher</h3>
                  <p className="text-gray-500 text-sm">Active now</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">Active now</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Likes & Matches</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="path_to_user_image_5"
                  alt="Eleanor Pena"
                />
                <div>
                  <h3 className="font-semibold">Eleanor Pena</h3>
                  <p className="text-gray-500 text-sm">Likes you 3 min ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="path_to_user_image_6"
                  alt="Leslie Alexander"
                />
                <div>
                  <h3 className="font-semibold">Leslie Alexander</h3>
                  <p className="text-gray-500 text-sm">Likes you 5 min ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="path_to_user_image_7"
                  alt="Dianne Russell"
                />
                <div>
                  <h3 className="font-semibold">Dianne Russell</h3>
                  <p className="text-gray-500 text-sm">Likes you 1 hr ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="path_to_user_image_8"
                  alt="Cody Fisher"
                />
                <div>
                  <h3 className="font-semibold">Cody Fisher</h3>
                  <p className="text-gray-500 text-sm">Likes you 2 hr ago</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Profile;
