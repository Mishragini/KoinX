import { useState } from "react";

export function Appbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className="flex justify-between p-2 bg-white w-screen">
      <div className="text-3xl font-bold text-blue-700">
        Koin<span className="text-orange-300">X</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="hidden md:block text-md font-bold mr-6">Crypto Taxes</div>
        <div className="hidden md:block text-md font-bold mr-6">Free tools</div>
        <div className="hidden md:block text-md font-bold mr-6">Resource Center</div>

        <div className="block md:hidden">
          <button
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-10 h-10 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          
        </div>

        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-6"
        >
          Get Started
        </button>
      </div>
      
    </div>
    {showMenu && (
            <div className="absolute right-4 bg-white flex flex-col w-40 h-24">
              <div className="text-md font-bold mb-2">Crypto Taxes</div>
              <div className="text-md font-bold mb-2">Free tools</div>
              <div className="text-md font-bold mb-2">Resource Center</div>
            </div>
          )}
      </>
  );
}
