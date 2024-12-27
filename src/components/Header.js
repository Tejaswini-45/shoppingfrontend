import React from "react";

const Header = () => {
  return (
    <header className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Apple Watch Studio</h1>
      <nav>
        <a href="/" className="mr-4 hover:text-gray-300">Home</a>
        <a href="/customize" className="hover:text-gray-300">Customize</a>
      </nav>
    </header>
  );
};

export default Header;
