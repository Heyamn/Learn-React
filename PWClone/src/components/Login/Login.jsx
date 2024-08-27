import React, { useState } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`Entered Phone Number: ${phoneNumber}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <button
          onClick={handleButtonClick}
          className="bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600 transition-colors"
        >
          Get Out
        </button>
      </div>
    </div>
  );
};

export default Login;
