import { useCallback, useState } from 'react';

import Modal from '../../component/Modal';

export default function useModal(size, isFull) {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const handleBackdropClick = useCallback((e) => {
    e.stopPropagation();
    close();
  }, []);
  /**
   *
   * @param {object} props
   * @param {{onClick: function(), label: string, loading: boolean, appearance: 'primary' | 'warning' | 'danger' | 'gray' | 'subtle'}[]} props.buttons
   * @returns
   */
  const ModalWrapper = useCallback(
    ({
      title,
      content,
      buttons,
      onBackdropClicked,
      children,
      closeEvent,
      backEvent,
      noPadding,
    }) => (
      <Modal
        size={size}
        isFull={isFull}
        title={title}
        content={content}
        buttons={buttons}
        onBackdropClick={
          onBackdropClicked ? onBackdropClicked : handleBackdropClick
        }
        isOpen={isOpen}
        closeEvent={closeEvent}
        backEvent={backEvent}
        noPadding={noPadding}
      >
        {children}
      </Modal>
    ),
    [isOpen]
  );

  return { open, close, isOpen, ModalWrapper };
}
