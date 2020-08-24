import { isBrowser } from './validation';

export const addRootElement = (id: string): void => {
  if (!isBrowser()) return;
  const existElement = document.getElementById(id);
  if (!existElement) {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    document.body.appendChild(element);
  }
};
