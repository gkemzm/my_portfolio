import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const stackImage = [
  { src: '/images/stack/js.png', name: 'JavaScript', width: 48 },
  { src: '/images/stack/type.png', name: 'TypeScript', width: 48 },
  { src: '/images/stack/react.jpg', name: 'React', width: 48 },
  { src: '/images/stack/next.png', name: 'Next.js', width: 48 },
  { src: '/images/stack/graphql.png', name: 'GraphQl', width: 48 },
  { src: '/images/stack/apollo.png', name: 'apollo Client', width: 48 },
  { src: '/images/stack/emotion.png', name: 'Emotion', width: 48 },
  { src: '/images/stack/recoil.png', name: 'Recoil', width: 24 },
  { src: '/images/stack/rest.png', name: 'RESTful Api', width: 48 },
  { src: '/images/stack/styled.jpg', name: 'Styled Component', width: 48 },
  { src: '/images/stack/jotai.jpg', name: 'Jotai', width: 48 },
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
                  onMouseOver={() => setCurrentItem(img.name)}
                  onMouseLeave={() => setCurrentItem('')}
                >
                  {currentItem === img.name ? (
                    <FlexRow>
                      <Image
                        src={img.src}
                        width={img.width}
                        height={48}
                        alt=""
                      />
                      <InfoText>{img.name}</InfoText>
                    </FlexRow>
                  ) : (
                    <FlexRow>
                      <Image
                        src={img.src}
                        width={img.width}
                        height={48}
                        alt=""
                      />
                    </FlexRow>
                  )}
                </ImageContent>
              ))}
            </ImageWrapper>
          </StackBox>
          <StackBox>
            <InfoText>Cooperation</InfoText>
            <ImageWrapper>
              {stackImage.map((img) => (
                <ImageContent
                  key={img.name}
                  onMouseOver={() => setCurrentItem(img.name)}
                  onMouseLeave={() => setCurrentItem('')}
                >
                  {currentItem === img.name ? (
                    <FlexRow>
                      <Image
                        src={img.src}
                        width={img.width}
                        height={48}
                        alt=""
                      />
                      <InfoText>{img.name}</InfoText>
                    </FlexRow>
                  ) : (
                    <FlexRow>
                      <Image
                        src={img.src}
                        width={img.width}
                        height={48}
                        alt=""
                      />
                    </FlexRow>
                  )}
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

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  padding: 12px;
  border-radius: 12px;
`;
const ImageContent = styled.div`
  margin-right: 16px;
  color: black;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;
