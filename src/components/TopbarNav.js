import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "./Session";

const TopbarNav = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <TopbarNavBaseAuth authUser={authUser} />
        ) : (
          <TopbarNavBaseNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const TopbarNavBaseAuth = props => (
  <nav className="flex items-center justify-between flex-wrap bg-black p-6">
    <div className="flex items-center flex-no-shrink text-white mr-6">
      <Link className="fill-current w-24 mr-2" to="/">
        <img alt="logo" src="../green_app_icon.svg" className="mr-3" />
      </Link>
      <h1 className="font-semibold text-xl tracking-tight">Movie Search</h1>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-white hover:text-teal-light">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full block lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link
          to="/trending"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        >
          Trending Media
        </Link>
        <Link
          to="/login"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        >
          {props.authUser.email} - SignOut
        </Link>
        {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Examples
      </a> */}
      </div>
    </div>
  </nav>
);

const TopbarNavBaseNonAuth = () => (
  <nav className="flex items-center justify-between flex-wrap bg-black p-6">
    <div className="flex items-center flex-no-shrink text-white mr-6">
      <Link className="fill-current w-24 mr-2" to="/">
        <img alt="logo" src="../green_app_icon.svg" className="mr-3" />
      </Link>
      <h1 className="font-semibold text-xl tracking-tight">Movie Search</h1>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-white hover:text-teal-light">
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="w-full block lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link
          to="/trending"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        >
          Trending Media
        </Link>
        <Link
          to="/login"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        >
          Login
        </Link>
        {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
        Examples
      </a> */}
      </div>
    </div>
  </nav>
);

export default TopbarNav;
