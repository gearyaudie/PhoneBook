import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className='container flex'>
        <h1 className='logo'>Contact List.</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>List</Link>
            </li>
            <li>
              <Link to='/form' className='btn'>
                Add
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};
