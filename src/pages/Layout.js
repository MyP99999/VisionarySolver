import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div> 
            <header className="bg-gray-600 h-24 flex justify-center items-center text-white text-xl gap-12">
                <Link to="/" className="button cursor-pointer">Home</Link>
                <Link to="/contact" className="button cursor-pointer">Contact</Link>
                <Link to="/about" className="button cursor-pointer">About</Link>
            </header>
            <Outlet /> {/* This is where Main will be rendered */}
        </div>

    );
}

export default Layout;
