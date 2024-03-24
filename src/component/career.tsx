import styled from 'styled-components';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import { Smaf } from './Project/smaf';
import { Gel } from './Project/gel';
import { KorlyMally } from './Project/korly';

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
  } = useModal('xl', false);

  const {
    open: openGel,
    ModalWrapper: GelModalWrapper,
    close: closeGel,
  } = useModal('xl', false);

  const {
    open: openKorlyMally,
    ModalWrapper: KorlyMallyModalWrapper,
    close: closeKorlyMally,
  } = useModal('xl', false);

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Carrer</Title>
        <ContentBox>
          <ContentBox>
            <ContentSection $margin={'0px 0px 100px 0px'}>
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
                  priority={true}
                />
              </LogoBox>
            </ContentSection>
            <ContentSection $margin={'0px 0px 16px 0px'}>
              <SubTitle>경력</SubTitle>
              <InfoText>주식회사 코레토 (2022.10 ~ 2023.11)</InfoText>
            </ContentSection>
            <ContentSection $margin={'0px 0px 24px 0px'}>
              <InfoText>역활</InfoText>
              <InfoText>. Front-end 개발</InfoText>
              <InfoText>
                - 공용컴포넌트 개발 및 / UI/UX 개선및 유지보수 / 반응형 웹 개선
              </InfoText>
            </ContentSection>
            <InfoText>참여 프로젝트</InfoText>
            <LogoWrapper>
              <LogoBox onClick={openGel}>
                <Image
                  src={'/images/web/gel.png'}
                  alt=""
                  width={100}
                  height={40}
                  priority={true}
                />
              </LogoBox>
              <LogoBox onClick={openKorlyMally}>
                <Image
                  src={'/images/web/korlymally.JPG'}
                  alt=""
                  width={100}
                  height={40}
                  priority={true}
                />
              </LogoBox>
            </LogoWrapper>
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
        size={''}
        isFull={false}
        children={undefined}
        isOpen={false}
        onBackdropClicked={undefined}
        closeEvent={{
          isClose: false,
          onClick: function (): void {
            throw new Error('Function not implemented.');
          },
        }}
        backEvent={{
          isBack: false,
          onClick: function (): void {
            throw new Error('Function not implemented.');
          },
        }}
        noPadding={false}
      />

      <GelModalWrapper
        title={'GEL'}
        buttons={[
          {
            label: '닫기',
            onClick: closeGel,
            appearance: 'primary',
          },
        ]}
        content={<Gel />}
        size={''}
        isFull={false}
        children={undefined}
        isOpen={false}
        onBackdropClicked={undefined}
        closeEvent={{
          isClose: false,
          onClick: function (): void {
            throw new Error('Function not implemented.');
          },
        }}
        backEvent={{
          isBack: false,
          onClick: function (): void {
            throw new Error('Function not implemented.');
          },
        }}
        noPadding={false}
      />

      <KorlyMallyModalWrapper
        title={'Korly Mally'}
        buttons={[
          {
            label: '닫기',
            onClick: closeKorlyMally,
            appearance: 'primary',
          },
        ]}
        content={<KorlyMally />}
        size={''}
        isFull={false}
        children={undefined}
        isOpen={false}
        onBackdropClicked={undefined}
        closeEvent={{
          isClose: false,
          onClick: function (): void {
            throw new Error('Function not implemented.');
          },
        }}
        backEvent={{
          isBack: false,
          onClick: function (): void {
            throw new Error('Function not implemented.');
          },
        }}
        noPadding={false}
      />
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

const Title = styled.p`
  font-size: 48px;
  line-height: 48px;
`;

const SubTitle = styled.p`
  font-size: 42px;
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
  min-height: 93%;

  padding: 8px 0px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const ContentSection = styled.div<{ $margin: string }>`
  display: flex;
  flex-direction: column;
  margin: ${({ $margin }) => $margin && $margin};
`;

const InfoText = styled.p`
  font-size: 28px;
`;

const LogoBox = styled.div`
  width: 116px;
  display: flex;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px #0000004b;
  margin: 8px 0 0 0;
  background-color: white;

  cursor: pointer;
`;

const LogoWrapper = styled.div`
  display: flex;

  & > *:first-child {
    margin-right: 16px;
  }
`;
