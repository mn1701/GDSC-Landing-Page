import React from 'react';
import { Link } from 'react-router-dom';

export default function UnderConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-start pt-20 bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Under construction...</h1>
      <p className="text-lg mb-8">Check back in later!</p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Return to Landing Page
      </Link>
    </div>
  );
}
