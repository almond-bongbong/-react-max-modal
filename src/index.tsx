import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import Portal from './components/Portal';

interface Props {
  children: ReactNode;
}

function Modal({ children }: Props): ReactElement {
  return (
    <Portal>{children}</Portal>
  );
}

export default Modal;
