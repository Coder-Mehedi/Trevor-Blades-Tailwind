import React from 'react';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen overflow-hidden opacity-75 '>
      <div className='w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader'></div>
    </div>
  );
};

export default Loading;
