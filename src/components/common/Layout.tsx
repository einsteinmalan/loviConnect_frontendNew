// src/components/common/Layout.tsx
import React from 'react';
import Sidebar from './Sidebar';

interface Props {
    children?: React.ReactNode
  }

const Layout: React.FC<Props>= ({ children  }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="content flex-1 p-6 bg-gray-100 h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
