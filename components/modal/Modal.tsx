import { ReactNode, useState } from 'react';

interface ModalProps {
  hideModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ hideModal, children }) => {
  return (
    <div
      className="fixed inset-0 bg-white/90 z-20 flex justify-center items-center py-8"
      onClick={hideModal}
    >
      {children}
    </div>
  );
};

export default Modal;
