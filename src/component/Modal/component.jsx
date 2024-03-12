/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';

import ModalContent from './ModalContent';
import { modalSizeStyles } from './style';
import useLockedBody from '../../hooks/useScrollLock';

const Component = ({
  size,
  isFull,
  title,
  content,
  children,
  buttons,
  isOpen = false,
  onBackdropClick,
  closeEvent,
  backEvent,
  noPadding = false,
}) => {
  const [mount, setMount] = useState(false);
  const [, setLocked] = useLockedBody();

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    setLocked(isOpen);
  }, [isOpen]);

  if (mount) {
    const portalElement = document.querySelector('#portal');

    if (!portalElement) {
      throw new Error('portal not found');
    }

    return createPortal(
      isOpen ? (
        <Wrapper isFull={isFull}>
          <Backdrop onClick={onBackdropClick} />
          <ModalBox size={size} isFull={isFull}>
            <ModalContent
              title={title}
              content={content}
              buttons={buttons}
              isFull={isFull}
              backEvent={backEvent}
              closeEvent={closeEvent}
              noPadding={noPadding}
            >
              {children}
            </ModalContent>
          </ModalBox>
        </Wrapper>
      ) : null,
      portalElement
    );
  } else {
    return null;
  }
};

export default Component;

Component.defaultProps = {
  size: 'sm',
  isOpen: false,
  isFull: false,
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  height: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10001;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
`;

const ModalBox = styled.div`
  ${({ size }) => modalSizeStyles[size]}
  min-width: 200px;
  position: relative;
  z-index: 10002;
  padding: ${({ isFull }) => (isFull ? '0 0 24px 0' : '24px')};
  background-color: #fff;
  border-radius: 8px;
`;
