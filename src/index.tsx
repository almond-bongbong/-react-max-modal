import * as React from 'react';
import { CSSProperties, ReactElement, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { mergeClassNames } from './libs/utils';
import styles from './styles.css';
import CustomCloseButton from './components/CustomCloseButton';
import CloseButton from './components/CloseButton';
import Modal from './components/Modal';

interface Props {
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
  title?: ReactNode;
  width?: number | string;
  zIndex?: number;
  mask?: boolean;
  closeButton?: ReactNode;
  showsCloseButton?: boolean;
  isMaskClosable?: boolean;
  isEscKeyClosable?: boolean;
  isCenteredMode?: boolean;
  isExpandedMode?: boolean;
  modalClassName?: string;
  maskClassName?: string;
  bodyClassName?: string;
  contentClassName?: string;
  modalStyle?: CSSProperties;
  maskStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  contentStyle?: CSSProperties;
}

const addGlobalModalId = (id: number) =>
  (window._activeModalIds = (window._activeModalIds || []).concat(id));
const removeGlobalModalId = (removeId: number) =>
  (window._activeModalIds = window._activeModalIds?.filter(
    (id) => id !== removeId,
  ));

function ModalContainer({
  visible,
  children,
  onClose,
  title,
  width = 520,
  zIndex,
  mask = true,
  closeButton,
  showsCloseButton = true,
  isMaskClosable = true,
  isEscKeyClosable = true,
  isCenteredMode = false,
  isExpandedMode = false,
  modalClassName,
  maskClassName,
  bodyClassName,
  contentClassName,
  modalStyle,
  maskStyle,
  bodyStyle,
  contentStyle,
}: Props): ReactElement | null {
  const modalIdRef = useRef<number>(Date.now());
  const modalBodyRef = useRef<HTMLDivElement>(null);
  const [localVisible, setLocalVisible] = useState(visible);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(
    () => () => {
      removeGlobalModalId(modalIdRef.current);
    },
    [],
  );

  useEffect(() => {
    if (visible) addGlobalModalId(modalIdRef.current);
    else removeGlobalModalId(modalIdRef.current);
  }, [visible]);

  const checkHasScroll = useCallback(() => {
    if (modalBodyRef.current) {
      const windowHeight = window.innerHeight;
      const height = modalBodyRef.current.clientHeight;
      const margin = 100;

      if (windowHeight - margin < height) {
        setHasScroll(true);
      }
    }
  }, [modalBodyRef]);

  const handleResizeContent = useCallback(() => {
    checkHasScroll();
  }, []);

  useEffect(() => {
    if (visible) {
      setTimeout(() => setLocalVisible(visible), 16);
    }
    if (!visible && localVisible) {
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
  const closeButtonComponent = closeButton ? (
    <CustomCloseButton onClick={onClose}>{closeButton}</CustomCloseButton>
  ) : (
    <CloseButton onClick={onClose} />
  );

  return visible || (!visible && localVisible) ? (
    <>
      <Modal
        mask={mask}
        maskClassName={maskClassNames}
        maskStyle={{ ...maskStyle, zIndex }}
        modalClassName={modalClassNames}
        modalStyle={{ ...modalStyle, zIndex }}
        bodyClassName={bodyClassNames}
        bodyStyle={{ ...bodyStyle, width }}
        bodyRef={modalBodyRef}
        contentClassName={contentClassNames}
        contentStyle={contentStyle}
        title={title}
        showsCloseButton={showsCloseButton}
        closeButton={closeButtonComponent}
        onClickMask={handleClickMask}
        onResizeContent={handleResizeContent}
      >
        {children}
      </Modal>
    </>
  ) : null;
}

export const useModal = (initialVisible = false) => {
  const [visible, setVisible] = useState(initialVisible);
  const openModal = useCallback((): void => setVisible(true), []);
  const closeModal = useCallback((): void => setVisible(false), []);

  return [visible, openModal, closeModal] as const;
};

export default ModalContainer;
