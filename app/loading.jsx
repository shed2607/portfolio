import React from 'react';
import './Loading.css'; // Import the CSS file for styling


export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
}
