import { ReactNode, useState } from 'react';

interface ModalProps {
  hideModal: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ hideModal, children, className }) => {
  return (
    <div
      className={` ${
        className ? className : ''
      } fixed inset-0 z-20 flex justify-center items-center py-8`}
      onClick={hideModal}
    >
      {children}
    </div>
  );
};

export default Modal;
