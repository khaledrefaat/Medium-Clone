import Image from 'next/image';
import Link from 'next/link';

interface ModalProps {
  hideModal: () => void;
  auth?: boolean;
  title?: string;
  description?: string;
}

const Modal: React.FC<ModalProps> = ({
  hideModal,
  auth,
  title,
  description,
}) => {
  return (
    <div
      className="fixed inset-0 bg-white/90 z-20 flex justify-center items-center py-8"
      onClick={hideModal}
    >
      <div
        className="h-full bg-white  shadow-2xl w-1/3 px-10 py-16 flex flex-col justify-between items-center relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4">
          <button onClick={hideModal}>
            <Image src="/icons/close.svg" height={20} width={20} />
          </button>
        </div>
        <div>
          <h3 className="font-medium text-xl">
            Create an account to bookmark this story.
          </h3>
        </div>
        <div>
          <p className="w-2/3 mx-auto text-center">
            Save stories to your personalized bookmarks and access them anytime,
            anywhere.
          </p>
        </div>
        <div>
          <div>
            <Link href="/">
              <a className="flex items-center px-4 py-2 border text-sm border-gray-500 rounded-full">
                <Image src="/icons/google.svg" height="20" width="20" />
                <span className="ml-2">Sign up with google</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="flex items-center px-4 py-2 border text-sm border-gray-500 rounded-full my-3">
                <Image src="/icons/facebook.svg" height="20" width="20" />
                <span className="ml-2">Sign up with facebook</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="flex items-center px-4 py-2 border text-sm border-gray-500 rounded-full">
                <Image src="/icons/mail.svg" height="20" width="20" />
                <span className="ml-2">Sign up with email</span>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <p>
            Already have an account?
            <button className=" font-bold text-green-700">Sign in</button>
          </p>
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
    </div>
  );
};

export default Modal;
