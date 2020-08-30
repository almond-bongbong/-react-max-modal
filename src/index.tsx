import * as React from 'react';
import {
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { mergeClassNames } from './libs/utils';
import { isBrowser } from './libs/validation';
import styles from './styles.css';
import Portal from './components/Portal';
import CloseButton from './components/CloseButton';
import Title from './components/Title';

interface Props {
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
  title?: ReactNode;
  width?: number | string;
  maskClosable?: boolean;
  escKeyClosable?: boolean;
  resetStyle?: boolean;
  modalClassName?: string;
  maskClassName?: string;
  bodyClassName?: string;
  contentClassName?: string;
}

function Modal({
  visible,
  children,
  onClose,
  title,
  width,
  maskClosable = true,
  escKeyClosable = true,
  modalClassName,
  maskClassName,
  bodyClassName,
  contentClassName,
}: Props): ReactElement {
  const modalBodyRef = useRef<HTMLDivElement>(null);
  const [localVisible, setLocalVisible] = useState(visible);
  const [hasScroll, setHasScroll] = useState(false);

  useLayoutEffect(() => {
    if (visible && !localVisible) {
      const scrollWidth =
        isBrowser() &&
        visible &&
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrollWidth || 0}px`;
    }
    if (!visible && !localVisible) {
      document.body.style.overflow = '';
      document.body.style.marginRight = '';
    }
  }, [visible, localVisible]);

  useLayoutEffect(() => {
    if (visible && modalBodyRef.current) {
      const windowHeight = window.innerHeight;
      const height = modalBodyRef.current.clientHeight;
      const margin = 50;

      if (windowHeight - margin < height) {
        setHasScroll(true);
      }
    }
  }, [visible, modalBodyRef]);

  useEffect(() => {
    if (visible) {
      setLocalVisible(visible);
    } else {
      setTimeout(() => setLocalVisible(visible), 200);
    }
  }, [visible]);

  const keydownHandler = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (escKeyClosable) document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [escKeyClosable, keydownHandler]);

  const handleClickMask = useCallback(() => {
    if (maskClosable) onClose?.();
  }, [maskClosable, onClose]);

  const handleClickBody = useCallback(
    (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    []
  );

  const modalClassNames = mergeClassNames(
    styles.modal,
    modalClassName,
    visible && localVisible && styles.active,
    hasScroll && styles.overflow_body
  );
  const maskClassNames = mergeClassNames(
    styles.mask,
    maskClassName,
    visible && localVisible && styles.active
  );
  const bodyClassNames = mergeClassNames(styles.modal_body, bodyClassName);
  const contentClassNames = mergeClassNames(styles.content, contentClassName);

  console.log('render : ', visible);

  return (
    <Portal>
      {(visible || (!visible && localVisible)) && (
        <>
          <div className={maskClassNames} style={{ width }} />
          <div className={modalClassNames} onClick={handleClickMask}>
            <div
              className={bodyClassNames}
              ref={modalBodyRef}
              onClick={handleClickBody}
            >
              {title && <Title>{title}</Title>}
              <div className={contentClassNames}>{children}</div>
              <CloseButton onClick={onClose} />
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}

export default Modal;
