// src/components/Loading.js

import React from 'react';
import './Loading.css'; // Assuming you have some CSS for the loader

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader">Loading...</div>
    </div>
  );
};

export default Loading;
