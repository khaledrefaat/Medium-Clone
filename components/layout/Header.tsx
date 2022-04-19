declare module '*.svg';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('working');
      window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        if (offset > 250) setIsScrolled(true);
        else setIsScrolled(false);
      });
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <header
      className={`pt-4 border-b border-black pb-4 fixed inset-x-0 top-0 z-10 ${
        isScrolled ? 'bg-white' : 'bg-yellow-400'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <Image src="/medium-logo.png" height={48} width={176} />
            </a>
          </Link>
        </div>
        <nav className="w-1/2 xl:w-1/3">
          <ul className="flex justify-evenly items-center">
            <li>
              <Link href="/">
                <a className="hidden md:inline text-sm  capitalize">
                  our story
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hidden md:inline text-sm  capitalize">
                  membership
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hidden md:inline text-sm  capitalize">write</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm  capitalize">sign in</a>
              </Link>
            </li>
            <li
              className={`${
                isScrolled ? 'bg-green-600 hover:bg-green-700' : 'bg-black'
              } py-2 px-4 rounded-full`}
            >
              <Link href="/">
                <a className="text-sm  capitalize text-white">get started</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
