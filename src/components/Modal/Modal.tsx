// src/components/Modal/Modal.tsx
import React from "react";
import { ModalWrapper, ModalOverlay, ModalContent } from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
