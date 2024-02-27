import React, { useState } from 'react';
import Navbar from './Components/NavBar';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    // You can use the form data: { username, password, email, termsChecked, privacyChecked }
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 rounded border border-gray-300 shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
              className="mr-2"
              required />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy"
              checked={privacyChecked}
              onChange={() => setPrivacyChecked(!privacyChecked)}
              className="mr-2"
              required />
            <label htmlFor="privacy" className="text-sm text-gray-700">
              I agree to the privacy policy
            </label>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="license" className="mr-2" required />
            <label htmlFor="license" className="text-sm text-gray-700">
              I agree to the license terms and conditions
            </label>
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
