import React, { useEffect, useRef } from 'react';
import './Modal.scss';
import { useAppTheme } from 'hooks';

import Icon from '../Icon/CustomIcon/CustomIcon';

export interface ModalProps {
  isOpen: boolean;
  onClose?: Function;
  children: any;
  isCloseButtonInverted?: boolean
}

export const modalStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  minHeight: '16rem',
  width: '24rem',
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  isCloseButtonInverted,
}) => {
  const modalRef = useRef<any>(null);
  const { theme } = useAppTheme();

  useEffect(() => {
    if (isOpen) {
      modalRef?.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={modalRef} className={'modal'} style={{
      backgroundColor: theme?.APP_BACKGROUND,
      color: theme?.TEXT,
    }}>
      {children}
      <button className={'close-button px-2 pt-0 rounded-full'} onClick={() => onClose?.()}>
        <Icon
          name="close"
          imageClass='-mt-2'
          color={isCloseButtonInverted ? '#FFF' : theme?.TEXT}
        />
      </button>
    </dialog>
  );
};
