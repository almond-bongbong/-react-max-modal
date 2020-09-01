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
  showsCloseButton?: boolean;
  isMaskClosable?: boolean;
  isEscKeyClosable?: boolean;
  isCenteredMode?: boolean;
  isExpandedMode?: boolean;
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
  width = 520,
  showsCloseButton = true,
  isMaskClosable = true,
  isEscKeyClosable = true,
  isCenteredMode = false,
  isExpandedMode = false,
  modalClassName,
  maskClassName,
  bodyClassName,
  contentClassName,
}: Props): ReactElement {
  const modalIdRef = useRef<number>(Date.now());
  const modalBodyRef = useRef<HTMLDivElement>(null);
  const [localVisible, setLocalVisible] = useState(visible);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    if (visible) {
      window._activeModalIds = (window._activeModalIds || []).concat(
        modalIdRef.current,
      );
    } else {
      window._activeModalIds = window._activeModalIds?.filter(
        (id) => id !== modalIdRef.current,
      );
    }
  }, [visible]);

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

  useLayoutEffect(() => {
    if (visible && !localVisible) {
      const scrollWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.position = 'relative';
      document.body.style.overflow = 'hidden';
      document.body.style.width = `calc(100% - ${scrollWidth || 0}px)`;
    }
    if (!visible && !localVisible && window._activeModalIds?.length === 0) {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    }
  }, [visible, localVisible]);

  useEffect(() => {
    if (visible) {
      setLocalVisible(visible);
    } else {
      setTimeout(() => setLocalVisible(visible), 200);
    }
  }, [visible]);

  const keydownHandler = useCallback(
    (e) => {
      if (
        window._activeModalIds &&
        window._activeModalIds[window._activeModalIds.length - 1] ===
          modalIdRef.current &&
        e.code === 'Escape'
      ) {
        onClose?.();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isEscKeyClosable && visible) {
      document.addEventListener('keydown', keydownHandler);
    }
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [isEscKeyClosable, visible, keydownHandler]);

  const handleClickMask = useCallback(() => {
    if (isMaskClosable) onClose?.();
  }, [isMaskClosable, onClose]);

  const handleClickBody = useCallback(
    (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    [],
  );

  const maskClassNames = mergeClassNames(
    styles.mask,
    maskClassName,
    visible && localVisible && styles.active,
  );
  const modalClassNames = mergeClassNames(
    styles.modal,
    modalClassName,
    visible && localVisible && styles.active,
    hasScroll && styles.overflow_body,
    isCenteredMode && styles.center_mode,
  );
  const bodyClassNames = mergeClassNames(
    styles.modal_body,
    bodyClassName,
    isExpandedMode && styles.expand_mode,
  );
  const contentClassNames = mergeClassNames(styles.content, contentClassName);

  return (
    <Portal>
      {(visible || (!visible && localVisible)) && (
        <>
          <div className={maskClassNames} />
          <div className={modalClassNames} onClick={handleClickMask}>
            <div
              className={bodyClassNames}
              ref={modalBodyRef}
              onClick={handleClickBody}
              style={{ width }}
            >
              <div className={contentClassNames}>
                {title && <Title>{title}</Title>}
                {children}
              </div>
              {showsCloseButton && <CloseButton onClick={onClose} />}
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}

export default Modal;
