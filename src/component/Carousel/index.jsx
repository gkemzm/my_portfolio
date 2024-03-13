import Image from 'next/image';
import { useState } from 'react';

import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Carousel = ({ data, moveValue = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(data.length);

  // useEffect(() => {
  //   console.log('렌더링');
  //   setLength(data.length);
  // }, [data]); >> data가 바뀌지 않는다면 없어도 됨

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <Wrapper>
      <TitleWithButton>
        <ButtonWrapper>
          <LeftButton onClick={prev} curIndex={currentIndex}>
            <FiChevronLeft />
          </LeftButton>

          <RightButton
            onClick={next}
            curIndex={currentIndex}
            totalLength={data.length}
          >
            <FiChevronRight />
          </RightButton>
        </ButtonWrapper>
      </TitleWithButton>
      <ContentBox
        style={{
          transform: `translateX(-${(currentIndex * 100) / moveValue}%)`,
        }}
      >
        {data.map((item, idx) => {
          return (
            <ImageWrapper key={idx} $width={`${item.width}px`}>
              <Image
                src={item.url}
                alt=""
                width={item.width}
                height={item.height}
              />
            </ImageWrapper>
          );
        })}
      </ContentBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const ContentBox = styled.div`
  display: flex;

  transition: all 0.3s ease-out;
  > * {
    width: 31.3%;
    flex-shrink: 0;
    flex-grow: 1;
    border-radius: 5%;
  }
`;

const TitleWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  .buttom-wrapper {
    width: 10%;
    display: flex;
  }
`;

const LeftButton = styled.button`
  width: 60px;
  height: 24px;
  border: 1px solid black;
  visibility: ${(props) => props.curIndex <= 0 && 'hidden'};

  border: none;
  background-color: white;
  box-shadow: 1px 0px 4px black;
  border-radius: 10px;

  cursor: pointer;
`;

const RightButton = styled.button`
  width: 60px;
  height: 24px;
  border: 1px solid black;
  visibility: ${(props) => props.curIndex >= props.totalLength - 1 && 'hidden'};

  border: none;
  background-color: white;
  box-shadow: 1px 0px 4px black;
  border-radius: 10px;

  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: ${({ $width }) => $width && $width};
  height: 700px;
`;

const ButtonWrapper = styled.div`
  padding: 0px 8px;

  & > *:first-child {
    margin-right: 16px;
  }

  :hover {
    background-color: #5e555567;
  }
`;
export default Carousel;
