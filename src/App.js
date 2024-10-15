import React from 'react';

function App() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Background image wrapper with blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://deltabusinesssolution.netlify.app/Image/OFFICEEE.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(5px)', // Blur effect only on background image
          zIndex: -1, // Ensure it stays behind the content
        }}
      />

      {/* Foreground content */}
      <div className="relative p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <h1 className="text-xl font-medium text-black">Welcome to Tailwind CSS in React!</h1>
          <p className="text-gray-500">This is a basic React and Tailwind app.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
