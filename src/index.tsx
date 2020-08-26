import * as React from 'react';
import { ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';
import Portal from './components/Portal';
import styles from './styles.css';

interface Props {
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
  maskClosable?: boolean;
  escKeyClosable?: boolean;
}

function Modal({
  visible,
  children,
  onClose,
  maskClosable = true,
  escKeyClosable = true,
}: Props): ReactElement {
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (visible) {
      setLocalVisible(visible);
    } else {
      setTimeout(() => setLocalVisible(visible), 300);
    }
  }, [visible]);

  const keydownHandler = useCallback((e) => {
    if (e.code === 'Escape') {
      onClose?.();
    }
  }, [onClose]);

  useEffect(() => {
    if (escKeyClosable) document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [
    escKeyClosable,
    keydownHandler,
  ]);

  const handleClickMask = useCallback(() => {
    if (maskClosable) onClose?.();
  }, [maskClosable, onClose]);

  const modalClassNames = [
    styles.modal,
    visible && localVisible && styles.active,
  ].filter(Boolean).join(' ');

  return (
    <Portal>
      {(visible || (!visible && localVisible)) && (
        <div className={modalClassNames}>
          <div className={styles.mask} onClick={handleClickMask} />
          <div className={styles.content}>{children}</div>
        </div>
      )}
    </Portal>
  );
}

export default Modal;
