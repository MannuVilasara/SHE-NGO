import React from 'react'
import logo from '../../public/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { IoMdExit } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="backdrop-blur-xl px-6 lg:px-10 ">
      <div>
        <div className="navbar relative z-50 shadow-sm">
          <div className="navbar-start">
            <Link to="/" className="">
              <IoMdExit className="exit rotate-180 text-3xl text-[#5e0000] absolute top-2 -lg:left-3 brightness-300" />
              <p className="back absolute top-9 left-10 bg-[#5e0000] font-bold montagu-slab backdrop-blur-3xl px-3 py-2 hidden z-50 brightness-250">
                GET BACK
              </p>
            </Link>
            <div className="dropdown relative z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#5e0000] brightness-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content  bg-black rounded-box mt-3 w-52 p-2 shadow text-xl montagu-slab text-[#5e0000] z-50"
              >
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-[#5e0000] text-xl brightness-250"
                        : "text-xl brightness-175"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/discover"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-[#5e0000] text-xl brightness-250"
                        : "text-xl brightness-175"
                    }
                  >
                    Discover Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-[#5e0000] text-xl brightness-250"
                        : "text-xl brightness-175"
                    }
                  >
                    Our Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-[#5e0000] text-xl"
                        : "text-xl"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <a className="  text-xl">
              <img className="md:h-30 md:w-30 h-20 w-20 bg-cover brightness-300 lg:ml-6" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu menu-horizontal px-1 flex gap-10 montagu-slab text-xl font-bold">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-[#5e0000] text-[#5e0000] brightness-250"
                      : " text-[#5e0000] brightness-175"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/discover"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-[#5e0000] text-[#5e0000] brightness-250" : " text-[#5e0000] brightness-175"
                  }
                >
                  Discover Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-[#5e0000] text-[#5e0000] brightness-250" : " text-[#5e0000] brightness-175"
                  }
                >
                  Our Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-[#5e0000] text-[#5e0000] brightness-250" : " text-[#5e0000] brightness-175"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <h1 className='text-[#5e0000] ml-10 text-2xl md:text-3xl font-bold montagu-slab brightness-300'>PROJECT SHE</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
