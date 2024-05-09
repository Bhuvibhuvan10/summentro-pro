import React from 'react';

const Modal1 = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="relative w-3/4 max-w-3xl">
        <button
          onClick={onClose}
          className="absolute mb-[100px] right-0 m-4 text-white hover:text-gray-300 focus:outline-none"
        >
          &times;
        </button>
        {src ? <img src={src} alt="Modal Image" className="w-full" /> : <p>No image source provided</p>}
      </div>
    </div>
  );
}

export default Modal1;
