// src/pages/Activities.tsx
import React from 'react';

const Activities: React.FC = () => {
  return (
    <div className="activities-page p-6">
      <h1 className="text-2xl font-semibold mb-4">Activities</h1>
      <div className="activity-list bg-white p-6 rounded-lg shadow-md">
        <div className="activity-item mb-4">
          <h2 className="text-xl font-semibold">Activity Title</h2>
          <p className="text-gray-600">Activity description goes here...</p>
        </div>
        {/* More activities */}
      </div>
    </div>
  );
};

export default Activities;
