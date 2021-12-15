import { isBrowser } from './validation';

export const mergeClassNames = (
  ...classNames: (string | undefined | false | null)[]
): string => classNames.filter(Boolean).join(' ');

export const lockBodyScroll = () => {
  if (!isBrowser()) return;

  const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.position = 'relative';
  document.body.style.overflow = 'hidden';
  document.body.style.width = `calc(100% - ${scrollWidth || 0}px)`;

  if (scrollWidth > 0) {
    document.body.classList.add('hide-scrollbar');
  }
};

export const unlockBodyScroll = () => {
  if (!isBrowser()) return;

  document.body.style.position = '';
  document.body.style.overflow = '';
  document.body.style.width = '';
  document.body.classList.remove('hide-scrollbar');
};
