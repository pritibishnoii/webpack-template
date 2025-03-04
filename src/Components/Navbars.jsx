import React from "react";
import { NavLink } from "react-router"; 

 const Navbars = () => {
  return (
    <div className="w-full h-16 bg-green-100 flex items-center justify-center">
      <nav>
        <ul className="flex space-x-4">
          {/* Use NavLink for navigation */}
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold border-b-2 border-blue-500 text-2xl" : "text-gray-500 text-2xl font-semibold"
              }
            >
              Table
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold border-b-2 border-blue-500 text-2xl" : "text-gray-500 text-2xl font-semibold"
              }
            >
              Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/edit"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold border-b-2 border-blue-500 text-2xl" : "text-gray-500 text-2xl font-semibold"
              }
            >
              Edit Bridel
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbars;