import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { style } from '../style';
import { navLinks } from "../constant";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 z-50 relative">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Abhiram logo" className='w-9 h-9 object-contain' />
          <p className='font-bold text-white text-[16px] cursor-pointer'>Abhiram &nbsp; | Web Developer</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-gray-400"} hover:text-white font-medium`}
              onClick={() => {
                setActive(link.title);
              }}>
              <a href={'#' + link.id} aria-current={active === link.title ? 'page' : undefined}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
            className='bg-transparent border-none cursor-pointer p-1'
          >
            <img src={toggle ? close : menu} alt="" className='w-[24px] object-contain' />
          </button>
          <div className={`${!toggle ? 'hidden' : 'flex'} z-40 absolute top-20 right-0 bg-[#1a1a2e] p-4 rounded-md shadow-lg`}>
            <ul className="list-none flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-gray-300"} p-1 hover:text-white font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}>
                  <a href={'#' + link.id}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
