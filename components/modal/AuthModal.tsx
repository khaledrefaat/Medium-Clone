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
          <h3 className="font-medium text-xl text-center">Welcome to medium</h3>
        </div>
        <div className="flex flex-col">
          <SocialButton name="google" />
          <SocialButton name="facebook" />
          <SocialButton name="github" />
        </div>
        <div>
          <p className="text-xs text-gray-500 px-2 text-center">
            Click “Continue to” to agree to Medium’s
            <span className="cursor-pointer underline mx-1">
              Terms of Service
            </span>
            and acknowledge that Medium’s
            <span className="cursor-pointer underline mx-1">
              Privacy Policy
            </span>
            applies to you.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
