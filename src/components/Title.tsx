import * as React from 'react';
import { ReactNode } from 'react';
import styles from '../styles.css';
import { mergeClassNames } from '../libs/utils';

interface Props {
  children: ReactNode;
  className?: string;
}

function Title({ children, className }: Props) {
  return (
    <em className={mergeClassNames(styles.title, className)}>{children}</em>
  );
}

export default Title;


