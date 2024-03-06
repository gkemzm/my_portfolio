import styled from 'styled-components';
import Image from 'next/image';

const info = {
  name: '박범수',
  phone: '010-5197-9336',
  email: 'gkemzm@gmail.com',
};
export const Carrer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Carrer</Title>
        <ContentBox>
          <ContentBox>
            <ContentSection>
              <SubTitle>수료교육</SubTitle>
              <InfoText>
                부트캠프 : 코드캠프 Front-end 5기 수료 (2022.02 ~ 2022.05) 참여
              </InfoText>
              <InfoText>참여 프로젝트</InfoText>
            </ContentSection>
            <ContentSection>
              <SubTitle>경력</SubTitle>
              <InfoText>주식회사 코레토 (2022.10 ~ 2023.11)</InfoText>
            </ContentSection>
            <InfoText>참여 프로젝트</InfoText>
          </ContentBox>
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
  font-size: 36px;
  line-height: 48px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 93%;
  border-radius: 10px;
  background-color: white;
  padding: 8px 12px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.p``;
