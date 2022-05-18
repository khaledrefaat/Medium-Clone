import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface SocialButtonProps {
  name: string;
  isSignIn: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({ name, isSignIn }) => {
  return (
    <button
      onClick={() => signIn(name)}
      className="flex items-center px-4 py-2 border text-sm border-gray-500 rounded-full my-3"
    >
      <Image src={`/icons/${name}.svg`} height="20" width="20" />
      <span className="ml-2">
        {isSignIn ? 'Sign In' : 'Sign up'} with {name}
      </span>
    </button>
  );
};

export default SocialButton;
