import React, { useEffect } from 'react';
import Modal from 'react-modal';

interface IProps {
  className?: string;
  modalIsOpen: boolean;
  contentLabel?: string;
  shouldCloseOnOverlayClick?: boolean;
  onAfterOpen?: Modal.OnAfterOpenCallback;
  onAfterClose?(): void;
  onRequestClose?(event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>): void;
  children: React.ReactChild;
}

const SystemModal = (props: IProps): JSX.Element => {
  const {
    className,
    children,
    modalIsOpen,
    contentLabel = '',
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    shouldCloseOnOverlayClick = true,
  } = props;

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalIsOpen]);

  const _onRequestClose = (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
    if (onRequestClose) {
      onRequestClose(event);
    }
  };

  const _onAfterOpen = () => {
    if (onAfterOpen) {
      onAfterOpen();
    }
  };

  const _onAfterClose = () => {
    if (onAfterClose) {
      onAfterClose();
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      contentLabel={contentLabel}
      className={`system-modal-default ${className ? className : ''}`}
      overlayClassName="system-modal-default-overlay"
      onAfterClose={_onAfterClose}
      onRequestClose={_onRequestClose}
      onAfterOpen={_onAfterOpen}>
      {children}
    </Modal>
  );
};

export default SystemModal;
