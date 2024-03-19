import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const stackImage = [
  {
    src: '/images/stack/js.png',
    name: 'JavaScript',
    width: 48,
  },
  { src: '/images/stack/type.png', name: 'TypeScript', width: 48 },
  { src: '/images/stack/react.jpg', name: 'React', width: 48 },
  { src: '/images/stack/next.png', name: 'Next.js', width: 48 },
  { src: '/images/stack/graphql.png', name: 'GraphQl', width: 48 },
  { src: '/images/stack/apollo.png', name: 'apollo Client', width: 48 },
  { src: '/images/stack/emotion.png', name: 'Emotion', width: 48 },
  { src: '/images/stack/recoil.png', name: 'Recoil', width: 48 },
  { src: '/images/stack/rest.png', name: 'RESTful Api', width: 48 },
  { src: '/images/stack/styled.jpg', name: 'Styled Component', width: 48 },
  { src: '/images/stack/jotai.jpg', name: 'Jotai', width: 48 },
];

const cooperationImage = [
  { src: '/images/cooperation/git.png', name: 'GitHub', width: 48 },
  { src: '/images/cooperation/jira.jpg', name: 'Jira', width: 48 },
  { src: '/images/cooperation/redmine.png', name: 'Red Mine', width: 64 },
  { src: '/images/cooperation/postman.png', name: 'Postman', width: 48 },
  {
    src: '/images/cooperation/playground.png',
    name: 'graphQl Play ground',
    width: 48,
  },
  { src: '/images/cooperation/swagger.png', name: 'Swagger', width: 48 },
  { src: '/images/cooperation/storybook.png', name: 'Stroy Book', width: 48 },
  { src: '/images/cooperation/figma.png', name: 'Figma', width: 48 },
];

export const Technique = () => {
  const [currentItem, setCurrentItem] = useState('');
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Stack</Title>
        <ContentBox>
          <StackBox>
            <InfoText>Front-end</InfoText>
            <ImageWrapper>
              {stackImage.map((img) => (
                <ImageContent
                  key={img.name}
                  $isCurrent={img.name === currentItem}
                  onMouseOver={() => setCurrentItem(img.name)}
                  onMouseLeave={() => setCurrentItem('')}
                  onClick={() => setCurrentItem(img.name)}
                >
                  <ImageItem>
                    <Image src={img.src} width={img.width} height={48} alt="" />
                    <StackName $isCurrent={img.name === currentItem}>
                      {img.name}
                    </StackName>
                  </ImageItem>
                </ImageContent>
              ))}
            </ImageWrapper>
          </StackBox>
          <StackBox>
            <InfoText>Cooperation</InfoText>
            <ImageWrapper>
              {cooperationImage.map((img) => (
                <ImageContent
                  key={img.name}
                  $isCurrent={img.name === currentItem}
                  onMouseOver={() => setCurrentItem(img.name)}
                  onMouseLeave={() => setCurrentItem('')}
                  onClick={() => setCurrentItem(img.name)}
                >
                  <ImageItem>
                    <Image src={img.src} width={img.width} height={48} alt="" />
                    <StackName $isCurrent={img.name === currentItem}>
                      {img.name}
                    </StackName>
                  </ImageItem>
                </ImageContent>
              ))}
            </ImageWrapper>
          </StackBox>
        </ContentBox>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
  padding: 0px 40px 40px 40px;

  @media screen and (max-width: 768px) {
    padding: 0px 20px 40px 20px;
    height: auto;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  & > *:first-child {
    margin-right: 16px;
  }
`;

const Title = styled.div`
  font-size: 36px;
  line-height: 48px;
`;

const StackBox = styled.div`
  margin-bottom: 40px;

  padding-bottom: 18vh;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px #0000004b;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 93%;
  border-radius: 10px;
`;
const InfoText = styled.p`
  font-size: 36px;
  line-height: 48px;
`;

const StackName = styled(InfoText)`
  position: absolute;

  opacity: ${({ $isCurrent }) => $isCurrent || 0};
  transform: ${({ $isCurrent }) => $isCurrent && 'translateX(60px)'};

  animation-name: fadeout;
  animation: ${({ $isCurrent }) => $isCurrent && 'fadeout'} 0.3s 0s 1 linear
    alternate;
  animation-fill-mode: both;

  @keyframes fadeout {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const ImageContent = styled.div`
  margin-right: 16px;
  color: black;
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  width: 82px;

  @media screen and (max-width: 768px) {
    padding: 8px;
    margin-bottom: 8px;
  }

  animation-name: 'open';
  animation: ${({ $isCurrent }) => ($isCurrent ? 'open' : 'close')} 0.3s 0s 1
    linear alternate;
  animation-fill-mode: both;

  @keyframes open {
    0% {
      width: 82px;
    }

    100% {
      width: 300px;
    }
  }
`;

const ImageItem = styled(FlexRow)``;
