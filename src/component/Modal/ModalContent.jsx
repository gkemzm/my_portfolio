/**
 * @copyright Copyright © 2022 Corretto, Inc. All rights reserved.
 */

import { FiChevronLeft, FiX } from 'react-icons/fi';
// import { GoAlert } from 'react-icons/go';
import styled, { css } from 'styled-components';

// import Button from '../Button';
// import Typography from '../Typography';

const Component = ({
  title,
  content,
  buttons,
  children,
  backEvent,
  closeEvent,
  isFull,
  noPadding = false,
}) => {
  return (
    <Wrapper>
      <TitleWrapper isFull={isFull}>
        {backEvent?.isBack && (
          <LeftIcon onClick={backEvent?.onClick}>
            <FiChevronLeft size={20} />
          </LeftIcon>
        )}
        {title && (
          <Title>
            {typeof title === 'string' ? (
              <H6Typo hasBack={backEvent?.isBack}>{title}</H6Typo>
            ) : (
              <Box>{title?.label}</Box>
            )}
          </Title>
        )}
        {closeEvent?.isClose && (
          <RightIcon onClick={closeEvent?.onClick}>
            <FiX size={20} />
          </RightIcon>
        )}
      </TitleWrapper>
      {children}
      {content && (
        <Content isFull={isFull} noPadding={noPadding}>
          {typeof content === 'string' ? (
            <ContentLabel>{content}</ContentLabel>
          ) : (
            <>{content}</>
          )}
        </Content>
      )}
      {buttons.length > 0 && (
        <BottomSection isFull={isFull}>
          <BtnSection>
            {buttons.map((button) => (
              <div key={button.label}>
                <Button onClick={button.onClick}>{button.label}</Button>
              </div>
            ))}
          </BtnSection>
        </BottomSection>
      )}
    </Wrapper>
  );
};

export default Component;

const Wrapper = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

const Content = styled.div`
  margin: 24px 0 0;
  ${({ isFull, noPadding }) => {
    if (isFull) {
      if (noPadding) {
        return css`
          padding: 0;
        `;
      }
      return css`
        padding: 0 24px;
      `;
    } else {
      if (noPadding) {
        return css`
          padding: 0;
        `;
      }
      return css`
        padding: 0;
      `;
    }
  }}
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  word-break: break-all;
  max-height: 600px;
`;

const ContentLabel = styled.div``;
const BottomSection = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 24px;
  padding: ${({ isFull }) => (isFull ? '0 24px' : '0')};
`;

const BtnSection = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  & {
    button + button {
      margin-left: 8px;
    }
  }
`;

const H6Typo = styled.div`
  margin-left: ${({ hasBack }) => (hasBack ? '28px' : '0')};
  font-weight: 800;
  font-size: 48px;
`;

const Box = styled(H6Typo)`
  display: flex;
`;

const TitleWrapper = styled.div`
  position: relative;
`;
const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
`;
const RightIcon = styled(IconWrapper)`
  top: 26px;
  right: 24px;
`;
const LeftIcon = styled(IconWrapper)`
  top: 26px;
  left: 24px;
`;

const Button = styled.button`
  background-color: white;
  font-weight: 700;
  font-size: 20px;
  padding: 4px 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 4px #bebebe;
`;
