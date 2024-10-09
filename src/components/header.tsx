'use client';

import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import Link from 'next/link';
import Image from 'next/image';
import { BsMenuUp } from 'react-icons/bs';
import { FaWindowClose } from 'react-icons/fa';
import { CiCloudMoon, CiSun } from 'react-icons/ci';
import { BsSlashLg } from 'react-icons/bs';

function Header() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMode = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 text-primary ${
        scrolled
          ? 'bg-header shadow-primary backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto text-inherit">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={'/images/mstomar.png'}
            width={72}
            height={72}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-[18px] font-bold cursor-pointer flex ">Mayank</p>
        </Link>
        <span className="flex flex-row justify-between gap-10  max-lg:gap-0 max-md:gap-6 items-center">
          <ul className="list-none hidden sm:flex flex-row gap-10 max-md:gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-inherit' : 'text-secondary'
                } text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            title="toggler"
            className="text-inherit xl:px-16 max-xl:px-4 text-[16px] font-extrabold flex flex-row max-sm:hidden"
            onClick={toggleMode}
          >
            <CiSun />
            <BsSlashLg />
            <CiCloudMoon />
          </button>
        </span>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <>
              <FaWindowClose
                className={`text-inherit font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] h-[28px] w-[28px] object-contain`}
                onClick={() => setToggle(!toggle)}
              />
            </>
          ) : (
            <>
              <BsMenuUp
                className={`text-inherit font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] h-[28px] w-[28px] object-contain`}
                onClick={() => setToggle(!toggle)}
              />
            </>
          )}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-header shadow-primary w-full  text-inherit absolute top-20 right-0 min-h-[20vh] my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end flex-1 flex-col gap-8 items-center">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? '' : 'text-inherit'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <button
                  type="submit"
                  title="toggler"
                  className="text-inherit px-16 text-[16px] flex flex-row font-extrabold"
                  onClick={toggleMode}
                >
                  <CiSun />
                  <BsSlashLg />
                  <CiCloudMoon />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
