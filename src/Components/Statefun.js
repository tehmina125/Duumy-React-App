import React, { useState } from 'react';

function Statefun() {
  const [data, setData] = useState('Tehmina');

  function updateData() {
    setData('maryam');
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='mb-4'>{data}</h1>
      <button 
        onClick={updateData} 
        className="border border-gray-400 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-blue-600 hover:border-blue-600">
        Update
      </button>
    </div>
  );
}

export default Statefun;