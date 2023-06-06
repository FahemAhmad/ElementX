// src/components/Form/Form.tsx
import React from 'react';
import { FormWrapper } from './Form.styles';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => (
  <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>
);

export default Form;
