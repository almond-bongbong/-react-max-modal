import { ReactNode, ReactPortal, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { addRootElement } from '../libs/element';
import { isBrowser } from '../libs/validation';

interface Props {
  children: ReactNode;
}

const PORTAL_ID = 'modal-container';

function Portal({ children }: Props): ReactPortal | null {
  const [init, setInit] = useState(false);
  const el = useRef(isBrowser() ? document.createElement('div') : null);
  const portalContainer = isBrowser() && document.getElementById(PORTAL_ID);

  useEffect(() => {
    addRootElement(PORTAL_ID);
    setInit(true);
  }, []);

  useEffect(() => {
    const content = el.current;

    if (portalContainer && content) {
      portalContainer.appendChild(content);
    }

    return () => {
      if (portalContainer && content) {
        portalContainer.removeChild(content);
      }
    };
  }, [portalContainer]);

  return el.current && init ? createPortal(children, el.current) : null;
}

export default Portal;
