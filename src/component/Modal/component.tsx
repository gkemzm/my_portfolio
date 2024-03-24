/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import ModalContent from './ModalContent';
import useLockedBody from '../../hooks/useScrollLock';
import { ModalComponentTypes } from './component.types';
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
}: ModalComponentTypes) => {
  const [mount, setMount] = useState(false);
  const [width, setWidth] = useState('400px');
  const [, setLocked] = useLockedBody();

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    // @ts-ignore
    setLocked(isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (!size) return;
    let width = '400px';

    if (size === 'sm') {
      width = '400px';
    }
    if (size === 'md') {
      width = '600px';
    }
    if (size === 'lg') {
      width = '800px';
    }
    if (size === 'xl') {
      width = '1240px';
    }
    setWidth(width);
  }, [size]);

  if (mount) {
    const portalElement = document.querySelector('#portal');

    if (!portalElement) {
      throw new Error('portal not found');
    }

    return createPortal(
      isOpen ? (
        <Wrapper>
          <Backdrop onClick={onBackdropClick} />
          <ModalBox $size={width} isFull={isFull}>
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

const ModalBox = styled.div<{
  isFull: boolean;
  $size: string;
}>`
  width: ${({ $size }) => $size && $size};
  min-width: 200px;
  position: relative;
  z-index: 10002;
  padding: ${({ isFull }) => (isFull ? '0 0 24px 0' : '24px')};
  background-color: #fff;
  border-radius: 8px;
`;
