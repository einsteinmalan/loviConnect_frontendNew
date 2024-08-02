import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full p-6">
            <h1 className="text-4xl font-semibold text-purple-700">Welcome back</h1>
            <p className="mt-2 text-gray-600">Please enter your log in details below</p>
            <form className="mt-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username or email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <a href="#" className="absolute right-3 top-3 text-sm text-purple-500">Forgot Password?</a>
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
              </div>
              <button className="w-full py-3 bg-purple-500 text-white rounded-md">Login</button>
            </form>
            <div className="flex items-center justify-center mt-6">
              <span className="h-px w-full bg-gray-300"></span>
              <span className="px-4 text-gray-600">OR</span>
              <span className="h-px w-full bg-gray-300"></span>
            </div>
            <div className="flex justify-center mt-4 gap-4">
              <button className="p-3 bg-blue-600 text-white rounded-md">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="p-3 bg-black text-white rounded-md">
                <i className="fab fa-apple"></i>
              </button>
              <button className="p-3 bg-red-500 text-white rounded-md">
                <i className="fab fa-google"></i>
              </button>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600">Don't have an account? <a href="#" className="text-purple-500">Sign up</a></p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 w-full p-6 relative">
            <div className="rounded-full border-8 border-purple-200 w-40 h-40 absolute top-16 left-16">
              <img src="path_to_image_1" alt="Profile 1" className="rounded-full w-full h-full object-cover"/>
            </div>
            <div className="rounded-full border-8 border-purple-200 w-40 h-40 absolute top-0 right-16">
              <img src="path_to_image_2" alt="Profile 2" className="rounded-full w-full h-full object-cover"/>
            </div>
            <div className="rounded-full border-8 border-purple-200 w-40 h-40 absolute bottom-16 left-0">
              <img src="path_to_image_3" alt="Profile 3" className="rounded-full w-full h-full object-cover"/>
            </div>
            <div className="rounded-full border-8 border-purple-200 w-40 h-40 absolute bottom-16 right-32">
              <img src="path_to_image_4" alt="Profile 4" className="rounded-full w-full h-full object-cover"/>
            </div>
            <div className="rounded-full border-8 border-purple-400 w-64 h-64 absolute bottom-0 right-0">
              <img src="path_to_main_image" alt="Main" className="rounded-full w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
