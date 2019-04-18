import React from "react";
import { Link } from "react-router-dom";

const TopbarNav = () => (
  <nav className="flex items-center justify-between flex-wrap bg-black p-6">
    <div className="flex items-center flex-no-shrink text-white mr-2 w-24">
      <Link className="w-full" to="/">
        <img alt="logo" src="../green_app_icon.svg" className="mr-3" />
      </Link>
    </div>
    <h1 className="font-semibold text-white mr-3">Movie Search</h1>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-white hover:text-teal-light">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link
          to="/trending"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Trending
        </Link>
        {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Examples
      </a> */}
      </div>
    </div>
  </nav>
);

export default TopbarNav;
