import styled from 'styled-components';
import { FiInstagram, FiUser, FiMail } from 'react-icons/fi';

const info = {
  name: '박범수 (Park Bum Soo)',
  phone: '010-5197-9336',
  email: 'gkemzm@gmail.com',
  velog: 'https://velog.io/@pbs1014/posts',
  education: '중원대학교 컴퓨터공학과 졸업(4년)',
};

export const Profile = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Profile</Title>
        <ContentBox>
          <ProfileWrapper>
            <ProfileInfoBox>
              <FiUser
                style={{
                  margin: '0px 8px 0px 0px',
                  width: '24px',
                  height: '24px',
                }}
              />
              <ProfileText $isClick={false}>NAME : {info.name}</ProfileText>
            </ProfileInfoBox>

            <ProfileInfoBox>
              <FiMail
                style={{
                  margin: '0px 8px 0px 0px',
                  width: '24px',
                  height: '24px',
                }}
              />
              <ProfileText $isClick={false}>EMAIL: {info.email}</ProfileText>
            </ProfileInfoBox>

            <ProfileInfoBox>
              <FiInstagram
                style={{
                  margin: '0px 8px 0px 0px',
                  width: '24px',
                  height: '24px',
                }}
              />
              <ProfileText
                $isClick={true}
                onClick={() => window.open(`${info.velog}`)}
              >
                VELOG : {info.velog}
              </ProfileText>
            </ProfileInfoBox>
          </ProfileWrapper>
          <AboutWrapper>
            <SubTitle>1. 저는 웹표준을 준수하는 개발자 입니다.</SubTitle>
            <IntroduceText $isClick={false}>
              항상HTML, CSS, JS등 웹표준에 맞춘 개발을 하려고 노력합니다.
            </IntroduceText>
            <SubTitle>2. 저는 협업을 중시하는 개발자 입니다.</SubTitle>
            <IntroduceText $isClick={false}>
              백엔드 개발자, 디자이너, 기획자, 클라이언트 등 다양한 분야의
              사람들과 협력 경험이 있으며 원활한 소통을 위해 노력합니다.
            </IntroduceText>
            <SubTitle>3. 저는 책임감있는 개발자 입니다.</SubTitle>
            <IntroduceText $isClick={false}>
              맡은일에 주인의식을 가지고 책임감 있게 임하여, 최선의 성취를
              이루고자 노력합니다.
            </IntroduceText>
            <SubTitle>4. 저는 배움을 좋아하는 개발자 입니다.</SubTitle>
            <IntroduceText $isClick={false}>
              새로운 기술을 익히는데 거부감이 없고, 새로운 기술을 습득하는 것을
              좋아합니다.
            </IntroduceText>

            <SubTitle>5. 저는 목표가 있는 개발자 입니다.</SubTitle>
            <IntroduceText $isClick={false}>
              현재는 프론트엔드 기술만 가지고 있지만 앞으로 백엔드 기술을 익혀
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
  height: auto;
  padding: 0px 40px 40px 40px;

  @media screen and (max-width: 768px) {
    padding: 0px 20px 40px 20px;
    height: auto;
  }
`;
const Title = styled.p`
  font-size: 48px;
  line-height: 48px;
`;

const SubTitle = styled.p`
  font-size: 28px;
  line-height: 48px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px #0000004b;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;

  padding: 20px 0px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const AboutWrapper = styled.div`
  width: 50%;

  padding: 0px 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ProfileWrapper = styled.div`
  width: 50%;
  border-right: 1px solid #ffffff5c;

  height: auto;
  @media screen and (max-width: 768px) {
    border: none;
    width: 100%;
  }
`;

const InfoText = styled.p<{ $isClick: boolean }>`
  line-height: 36px;
  cursor: ${({ $isClick }) => $isClick === true && 'pointer'};
`;

const ProfileText = styled(InfoText)`
  font-size: 30px;
  line-height: 28px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const IntroduceText = styled(InfoText)`
  font-size: 24px;
  padding-bottom: 32px;
`;

const ProfileInfoBox = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  border: none;
  border-radius: 4px;
  box-shadow: 3px 3px 5px #0000004b;
  margin-bottom: 40px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    display: inline-block;
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
  }
`;
