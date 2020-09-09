import { useCallback, useState } from 'react';

function useModal(initialVisible = false) {
  const [visible, setVisible] = useState(initialVisible);
  const openModal = useCallback((): void => setVisible(true), []);
  const closeModal = useCallback((): void => setVisible(false), []);

  return [visible, openModal, closeModal] as const;
}

export default useModal;
