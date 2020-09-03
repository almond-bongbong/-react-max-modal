import * as React from 'react';
import { ReactNode } from 'react';
import { mergeClassNames } from '../libs/utils';
import styles from '../styles.css';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

function CustomCloseButton({ children, onClick }: Props) {
  const mergedClassNames = mergeClassNames(styles.custom_close_button);
  return (
    <button type="button" onClick={onClick} className={mergedClassNames}>
      {children}
    </button>
  );
}

export default CustomCloseButton;
