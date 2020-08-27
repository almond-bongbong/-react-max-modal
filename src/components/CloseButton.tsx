import * as React from 'react';
import styles from '../styles.css';
import { mergeClassNames } from '../libs/utils';

interface Props {
  onClick: () => void;
  className?: string;
}

function CloseButton({ onClick, className }: Props) {
  const mergedClassNames = mergeClassNames(styles.close_button, className);

  return (
    <button
      type="button"
      onClick={onClick}
      className={mergedClassNames}
      title="close modal"
    />
  );
}

export default CloseButton;
