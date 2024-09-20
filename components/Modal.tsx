import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
}

export default function Modal({
  isOpen,
  children,
}: PropsWithChildren<ModalProps>) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        {children}
      </div>
    </>,
    document.getElementById('modal-root') as HTMLElement,
  );
}
