import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import Portal from './components/Portal';

interface Props {
  show: boolean;
  children: ReactNode;
}

function Modal({ show, children }: Props): ReactElement {
  return (
    <Portal>
      {show && (
        <div>
          {children}
        </div>
      )}
    </Portal>
  );
}

export default Modal;
