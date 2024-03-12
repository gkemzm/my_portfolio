import styled from 'styled-components';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import { Smaf } from './Project/smaf';

const info = {
  name: '박범수',
  phone: '010-5197-9336',
  email: 'gkemzm@gmail.com',
};
export const Carrer = () => {
  const {
    open: openSmaf,
    ModalWrapper: SmafModalWrapper,
    close: closeSmaf,
  } = useModal('xl');

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Carrer</Title>
        <ContentBox>
          <ContentBox>
            <ContentSection $margin={'0px 0px 40px 0px'}>
              <SubTitle>수료교육</SubTitle>
              <InfoText>
                부트캠프 : 코드캠프 Front-end 5기 수료 (2022.02 ~ 2022.05) 참여
              </InfoText>
              <InfoText>참여 프로젝트</InfoText>
              <LogoBox onClick={openSmaf}>
                <Image
                  src={'/images/smaf.JPG'}
                  alt=""
                  width={100}
                  height={40}
                />
              </LogoBox>
            </ContentSection>
            <ContentSection>
              <SubTitle>경력</SubTitle>
              <InfoText>주식회사 코레토 (2022.10 ~ 2023.11)</InfoText>
            </ContentSection>
            <InfoText>참여 프로젝트</InfoText>
          </ContentBox>
        </ContentBox>
      </ContentWrapper>

      <SmafModalWrapper
        title={'SMAF'}
        buttons={[
          {
            label: '닫기',
            onClick: closeSmaf,
            appearance: 'primary',
          },
        ]}
        content={<Smaf />}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
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
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px #0000004b;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 93%;

  padding: 8px 12px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ $margin }) => $margin && $margin};
`;

const InfoText = styled.p``;

const LogoBox = styled.div`
  width: 116px;
  display: flex;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px #0000004b;
  margin: 8px 0 0 0;

  cursor: pointer;
`;
