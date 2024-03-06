import styled from 'styled-components';
import Image from 'next/image';

const info = {
  name: '박범수 (Park Bum Soo)',
  phone: '010-5197-9336',
  email: 'gkemzm@gmail.com',
  velog: 'https://velog.io/@pbs1014/posts',
};

export const Profile = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Profile</Title>
        <ContentBox>
          <ProfileWrapper>
            <Title>Profile</Title>
            <InfoText>NAME : {info.name}</InfoText>
            <InfoText>EMAIL ADDRESS : {info.email}</InfoText>
            <InfoText
              $isClick={true}
              onClick={() => window.open(`${info.velog}`)}
            >
              VELOG : {info.velog}
            </InfoText>
          </ProfileWrapper>
          <AboutWrapper>
            <Title>About Me</Title>

            <SubTitle>1. 저는 웹표준을 준수하는 개발자 입니다.</SubTitle>
            <IntroduceText>
              항상HTML, CSS, JS등 웹표준에 맞춘 개발을 하려고 노력합니다.
            </IntroduceText>
            <SubTitle>2. 저는 협업을 중시하는 개발자 입니다.</SubTitle>
            <IntroduceText>
              백엔드 개발자, 디자이너, 기획자, 클라이언트 등 다양한 분야의
              사람들과 협력 경험이 있으며 원활한 소통을 위해 노력합니다.
            </IntroduceText>
            <SubTitle>3. 저는 책임감있는 개발자 입니다.</SubTitle>
            <IntroduceText>
              맡은일에 주인의식을 가지고 책임감 있게 임하여, 최선의 성취를
              이루고자 노력합니다.
            </IntroduceText>
            <SubTitle>4. 저는 배움을 좋아하는 개발자 입니다.</SubTitle>
            <IntroduceText>
              새로운 기술을 익히는데 거부감이 없고, 새로운 기술을 습득하는 것을
              좋아합니다.
            </IntroduceText>

            <SubTitle>5. 저는 목표가 있는 개발자 입니다.</SubTitle>
            <IntroduceText>
              현재는 프론트엔드 기술만 가지고 있지만 앞으로 백엔드를 기술을 익혀
              풀스택개발자를 목표로 두고있습니다.
            </IntroduceText>
          </AboutWrapper>
        </ContentBox>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  padding: 0px 40px 40px 40px;
`;
const Title = styled.div`
  font-size: 36px;
  line-height: 48px;
`;

const SubTitle = styled.div`
  font-size: 28px;
  line-height: 48px;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 93%;
  padding: 20px 0px;
  border-radius: 10px;
  background-color: white;
`;
const AboutWrapper = styled.div`
  width: 50%;

  padding: 0px 20px;
`;

const ProfileWrapper = styled.div`
  width: 50%;
  padding: 0px 20px;
  border-right: 1px solid black;
`;

const InfoText = styled.p`
  line-height: 36px;
  cursor: ${({ $isClick }) => $isClick === true && 'pointer'};
`;

const IntroduceText = styled(InfoText)`
  padding-bottom: 32px;
`;
