import * as React from 'react';
import {
  CSSProperties,
  ReactNode,
  RefObject,
  SyntheticEvent,
  useCallback,
  useLayoutEffect,
} from 'react';
import ReactResizeDetector from 'react-resize-detector';
import Title from './Title';
import Portal from './Portal';
import { isBrowser } from '../libs/validation';
import { lockBodyScroll, unlockBodyScroll } from '../libs/utils';

interface Props {
  mask?: boolean;
  maskClassName: string;
  maskStyle: CSSProperties;
  modalClassName: string;
  modalStyle: CSSProperties;
  bodyClassName: string;
  bodyStyle: CSSProperties;
  bodyRef: RefObject<HTMLDivElement>;
  contentClassName: string;
  contentStyle?: CSSProperties;
  title?: ReactNode;
  children: ReactNode;
  showsCloseButton?: boolean;
  closeButton: ReactNode;
  onClickMask: () => void;
  onResizeContent: () => void;
}

function Modal({
  mask,
  maskClassName,
  maskStyle,
  modalClassName,
  modalStyle,
  bodyClassName,
  bodyStyle,
  bodyRef,
  contentClassName,
  contentStyle,
  title,
  children,
  showsCloseButton,
  closeButton,
  onClickMask,
  onResizeContent,
}: Props) {
  useLayoutEffect(() => {
    if (!isBrowser()) return;

    const isFirstModal =
      !window._activeModalIds || window._activeModalIds.length === 0;
    if (isFirstModal) {
      lockBodyScroll();
    }

    return () => {
      if (window._activeModalIds?.length === 0) {
        unlockBodyScroll();
      }
    };
  }, []);

  const handleClickBody = useCallback(
    (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    [],
  );

  return (
    <Portal>
      {mask && <div className={maskClassName} style={maskStyle} />}
      <div className={modalClassName} onClick={onClickMask} style={modalStyle}>
        <ReactResizeDetector handleHeight onResize={onResizeContent}>
          <div
            className={bodyClassName}
            ref={bodyRef}
            onClick={handleClickBody}
            style={bodyStyle}
          >
            <div className={contentClassName} style={contentStyle}>
              {title && <Title>{title}</Title>}
              {children}
            </div>
            {showsCloseButton && closeButton}
          </div>
        </ReactResizeDetector>
      </div>
    </Portal>
  );
}

export default Modal;
