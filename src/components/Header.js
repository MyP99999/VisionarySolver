import React from 'react';

function Header() {
  return (
    <header className="bg-gray-600 h-24 flex justify-center items-center gap-3">
        <a className="button cursor-pointer">Home</a>
        <a className="button cursor-pointer" href="contact.html">Contact</a>
        <a className="button cursor-pointer" href="about.html">About</a>
        <button id="scrollTopBtn" title="Go to top">Top</button>
    </header>
  );
}

export default Header;
