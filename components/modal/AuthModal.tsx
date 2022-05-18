import React, { useState } from 'react';
import Modal from './Modal';
import { signIn as authSignIn, signOut } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';
import SocialButton from './SocialButton';

interface AuthModalProps {
  hideModal: () => void;
  signIn?: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({ signIn, hideModal }) => {
  const [isSignIn, setIsSignIn] = useState(signIn || false);

  const handelSwitch = () => setIsSignIn(isSignIn => !isSignIn);

  return (
    <Modal hideModal={hideModal}>
      <div
        className="h-full bg-white  shadow-2xl w-4/5 sm:w-2/3 md:w-1/2 xl:w-1/3 px-10 py-16 flex flex-col justify-between items-center relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4">
          <button onClick={hideModal}>
            <Image src="/icons/close.svg" height={20} width={20} />
          </button>
        </div>
        <div>
          <h3 className="font-medium text-xl text-center">
            {isSignIn
              ? 'Welcome back.'
              : 'Create an account to bookmark this story.'}
          </h3>
        </div>
        {!isSignIn && (
          <div>
            <p className="w-2/3 mx-auto text-center">
              Save stories to your personalized bookmarks and access them
              anytime, anywhere.
            </p>
          </div>
        )}
        <div className="flex flex-col">
          <SocialButton isSignIn={isSignIn} name="google" />
          <SocialButton isSignIn={isSignIn} name="facebook" />
          <SocialButton isSignIn={isSignIn} name="github" />
        </div>
        <div>
          {isSignIn ? (
            <p>
              No account?
              <button
                className=" font-bold text-green-700"
                onClick={handelSwitch}
              >
                Create one
              </button>
            </p>
          ) : (
            <p>
              Already have an account?
              <button
                className=" font-bold text-green-700"
                onClick={handelSwitch}
              >
                Sign in
              </button>
            </p>
          )}
        </div>
        <div>
          <p className="text-xs text-gray-500 px-2 text-center">
            Click “Sign Up” to agree to Medium’s
            <span className="cursor-pointer underline">Terms of Service</span>
            and acknowledge that Medium’s
            <span className="cursor-pointer underline">Privacy Policy</span>
            applies to you.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
