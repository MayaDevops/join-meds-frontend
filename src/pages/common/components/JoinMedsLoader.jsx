import React from 'react';

const JoinMedsLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-90">
      {/* Spinner */}
      <div className="h-16 w-16 border-4 border-t-transparent rounded-full animate-spin mb-4"
        style={{
          borderTopColor: '#00A4E1',   // Cyan
          borderRightColor: '#1E90FF', // Blue
          borderBottomColor: '#20C997', // Teal
          borderLeftColor: '#00A4E1'
        }}
      />

      {/* JoinMeds Portal gradient text */}
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        JoinMeds Portal
      </h1>
    </div>
  );
};

export default JoinMedsLoader;
