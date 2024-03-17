import styled from 'styled-components';
import Carousel from '../Carousel';
import Image from 'next/image';
import { useState } from 'react';
const webData = [
  { url: '/images/web/smaf1.PNG', width: 947, height: 684 },
  { url: '/images/web/smaf2.PNG', width: 947, height: 684 },
  { url: '/images/web/smaf3.PNG', width: 1047, height: 684 },
  { url: '/images/web/smaf4.PNG', width: 947, height: 684 },
];

const data = [
  { url: '/images/mobile/1.PNG', width: 947, height: 684 },
  { url: '/images/mobile/2.PNG', width: 240, height: 564 },
  { url: '/images/mobile/3.PNG', width: 459, height: 511 },
  { url: '/images/mobile/4.PNG', width: 240, height: 564 },
  { url: '/images/mobile/5.PNG', width: 240, height: 564 },
  { url: '/images/mobile/6.PNG', width: 240, height: 564 },
  { url: '/images/mobile/7.PNG', width: 694, height: 672 },
  { url: '/images/mobile/8.PNG', width: 240, height: 672 },
];

const stackImage = [
  { src: '/images/stack/js.png', name: 'JavaScript', width: 48 },
  { src: '/images/stack/react.jpg', name: 'React', width: 48 },
  { src: '/images/stack/next.png', name: 'Next.js', width: 48 },
  { src: '/images/stack/rest.png', name: 'RESTful Api', width: 48 },

  { src: '/images/stack/styled.jpg', name: 'Styled Component', width: 48 },
  { src: '/images/stack/jotai.jpg', name: 'Jotai', width: 48 },
];
export const KorlyMally = () => {
  const [currentItem, setCurrentItem] = useState('');

  return (
    <Wrapper>
      <LinkWrapper>
        <LinkButton
          onClick={() => window.open(`https://korlymally.kr/aboutus`)}
        >
          <BasicText>배포링크</BasicText>
        </LinkButton>
      </LinkWrapper>
      <SubTitle>(아직 정식 출시 전 단계입니다.)</SubTitle>

      <ContentWrapper>
        <Itroduce>
          <TitleText>프로젝트 소개</TitleText>

          <InfoText>
            Korly Mally는 입점형 해외 쇼핑 플랫폼으로서 한국 브랜드를 모아 해외
            배송을 대행 해주며,
            <br /> 다국어/다통화기능을 통한 언어/환율 기능 및 인플루언서
            매칭을통한 마케팅 지원을 해주는 플랫폼 입니다.
          </InfoText>
        </Itroduce>

        <Itroduce>
          <TitleText>역활</TitleText>
          <InfoText>프론트엔드 개발(판매자페이지)</InfoText>
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
        {/* <Itroduce>
          <TitleText>화면</TitleText>
          <InfoText>웹 페이지</InfoText>
          <Carousel data={webData} moveValue={1.3} />
          <InfoText>반응형 페이지</InfoText>
          <Carousel data={data} moveValue={3.9} />
        </Itroduce> */}
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
  line-height: 38px;
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
const SubTitle = styled(BasicText)`
  font-size: 24px;
  line-height: 32px;
`;
