import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AuthModal from '../modal/AuthModal';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function handelSignIn() {
    setShowSignIn(true);
    showModal();
  }

  function handelGetStarted() {
    setShowSignIn(false);
    showModal();
  }

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
    <>
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
                  <a className="hidden md:inline text-sm  capitalize font-medium">
                    our story
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hidden md:inline text-sm  capitalize font-medium">
                    membership
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hidden md:inline text-sm  capitalize font-medium">
                    write
                  </a>
                </Link>
              </li>
              <li
                className="text-sm  capitalize cursor-pointer font-medium"
                onClick={handelSignIn}
              >
                sign in
              </li>
              <li
                className={`text-sm cursor-pointer  capitalize font-medium text-white ${
                  isScrolled ? 'bg-green-600 hover:bg-green-700' : 'bg-black'
                } py-2 px-4 rounded-full`}
                onClick={handelGetStarted}
              >
                get started
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isModalVisible && (
        <AuthModal signIn={showSignIn} hideModal={hideModal} />
      )}
    </>
  );
};

export default NavBar;
