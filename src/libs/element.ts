import { isBrowser } from './validation';
import { PORTAL_ID } from '../components/Portal';

export const addRootElement = (id: string): void => {
  if (!isBrowser()) return;
  const existElement = document.getElementById(id);
  if (!existElement) {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    document.body.appendChild(element);
  }
};

export const getActiveModalLength = () => {
  if (!isBrowser()) return 0;
  const container = document.getElementById(PORTAL_ID);
  if (!container) return 0;
  return container.children.length;
};

export const getLastModalId = () => {
  if (!isBrowser()) return null;
  const container = document.getElementById(PORTAL_ID);
  if (!container) return null;
  const lastModal = container.children[container.children.length - 1];
  const id = lastModal?.getAttribute('id');
  return id ? Number(id) : null;
};
