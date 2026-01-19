import React, { useEffect, useRef, useContext } from 'react';
import './Modal.css';
import { GoalsContext } from '../List/GoalProvider';

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { clearEdit } = useContext(GoalsContext);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (isOpen) {
      dialogRef.current.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialogRef.current.close();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
      clearEdit();
    }
  };
  return (
    <dialog ref={dialogRef} onClick={handleClose}>
      {children}
    </dialog>
  );
};
export default Modal;
