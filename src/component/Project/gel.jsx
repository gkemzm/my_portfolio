import styled from 'styled-components';
import Carousel from '../Carousel';
import Image from 'next/image';
import { useState } from 'react';
const webData = [
  { url: '/images/web/gel/main.JPG', width: 947, height: 684 },
  { url: '/images/web/gel/product.JPG', width: 947, height: 400 },
  { url: '/images/web/gel/shop.JPG', width: 947, height: 400 },
  { url: '/images/web/gel/logistics.JPG', width: 1047, height: 400 },
  { url: '/images/web/gel/stock.JPG', width: 947, height: 400 },
];

const stackImage = [
  { src: '/images/stack/js.png', name: 'JavaScript', width: 48 },
  { src: '/images/stack/react.jpg', name: 'React', width: 48 },
  { src: '/images/stack/next.png', name: 'Next.js', width: 48 },
  { src: '/images/stack/rest.png', name: 'RESTful Api', width: 48 },
  { src: '/images/stack/styled.jpg', name: 'Styled Component', width: 48 },
  { src: '/images/stack/jotai.jpg', name: 'Jotai', width: 48 },
];
export const Gel = () => {
  const [currentItem, setCurrentItem] = useState('');

  return (
    <Wrapper>
      <LinkWrapper>
        <LinkButton onClick={() => window.open(`http://www.cowtec.co.kr/`)}>
          <BasicText>소개 페이지</BasicText>
        </LinkButton>
      </LinkWrapper>
      <SubTitle>
        (구독형 플렛폼이기에 배포링크가 아닌 소개페이지를 참고해주시기
        바랍니다.)
      </SubTitle>

      <ContentWrapper>
        <Itroduce>
          <TitleText>프로젝트 소개</TitleText>
          <InfoText>
            gel click은 해외 쇼핑몰 관리를 위한 솔루션입니다. 해외쇼핑몰 주문
            관리, 배송 관리, 수출입 신고등 Cross Border eCommerce에 관련된
            편리한 기능을 제공합니다.
          </InfoText>
        </Itroduce>

        <Itroduce>
          <TitleText>역활</TitleText>
          <InfoText>프론트엔드 개발(사용자 페이지 / 관리자 페이지)</InfoText>
        </Itroduce>

        <Itroduce>
          <TitleText>스택</TitleText>
          <ImageWrapper>
            {stackImage.map((img) => (
              <ImageContent
                key={img.name}
                onMouseOver={() => setCurrentItem(img.name)}
                onMouseLeave={() => setCurrentItem('')}
              >
                {currentItem === img.name ? (
                  <FlexRow>
                    <Image src={img.src} width={img.width} height={48} alt="" />
                    <InfoText>{img.name}</InfoText>
                  </FlexRow>
                ) : (
                  <FlexRow>
                    <Image src={img.src} width={img.width} height={48} alt="" />
                  </FlexRow>
                )}
              </ImageContent>
            ))}
          </ImageWrapper>
        </Itroduce>
        <Itroduce>
          <TitleText>화면</TitleText>
          <InfoText>웹 페이지</InfoText>
          <Carousel data={webData} moveValue={1.3} />
        </Itroduce>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: 85vh;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    margin-right: 16px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  height: 60px;
  & > *:first-child {
    margin-right: 16px;
  }
  :hover {
    background-color: black;
    color: white;
  }
`;

const LinkButton = styled.button`
  box-shadow: 2px 2px 3px #2407074e;
  border: none;
  border-radius: 12px;
  padding: 4px 12px;
  height: 42px;
  cursor: pointer;
`;
const BasicText = styled.p`
  font-size: 30px;
  line-height: 40px;
`;

const SubTitle = styled(BasicText)`
  font-size: 24px;
  line-height: 32px;
`;

const ContentWrapper = styled.div``;

const Itroduce = styled.div`
  margin-bottom: 24px;
`;

const TitleText = styled.p`
  font-size: 30px;
`;

const InfoText = styled.p``;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContent = styled.div`
  margin-right: 16px;
`;
