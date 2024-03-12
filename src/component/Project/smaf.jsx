import styled from 'styled-components';
import Carousel from '../Carousel';

export const Smaf = () => {
  const webData = [
    { url: '/images/web/smaf1.PNG', width: 947, height: 684 },
    { url: '/images/web/smaf2.PNG', width: 947, height: 684 },
    { url: '/images/web/smaf3.PNG', width: 947, height: 684 },
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
    { url: '/images/mobile/8.PNG', width: 240, height: 564 },
  ];
  return (
    <Wrapper>
      <LinkWrapper>
        <LinkButton
          onClick={() =>
            window.open(`https://github.com/code-bootcamp/SMAF-client`)
          }
        >
          <BasicText>GitHub</BasicText>
        </LinkButton>
        <LinkButton
          onClick={() =>
            window.open(
              `https://dingco.notion.site/5-6c65f237620d45ff86a9b8fd5388f2ce`
            )
          }
        >
          <BasicText>Notion</BasicText>
        </LinkButton>
      </LinkWrapper>

      <ContentWrapper>
        <Itroduce>
          <TitleText>프로젝트 소개</TitleText>
          <InfoText>
            SMAF는 Schedule Management Assist Friend 의 약자로 일정 관리를
            도와주는 Flatform 입니다.
            <br /> 기존에 많은 일정 관리 사이트가 있지만 실제로 사용해보면서
            <br />
            “사용 방법이 복잡하다.”, “가입하기 전에 사용해보지 못한다.” 같은
            의견이 나왔고, <br />
            “불편했던 부분을 개선하고 우리끼리 새로운 사이트를 만들어보자!”는
            결론에 도착하여 기획 되었습니다.
            <br /> 따라서 SMAF는 회원 가입 전 메인 페이지에서 간단하게 사용
            방식을 체험 할 수 있으며, <br />
            직관적인 UI 를 통하여 쉽게 사용이 가능한 장점을 가진 일정 관리
            Flatform 입니다.
          </InfoText>
        </Itroduce>

        <Itroduce>
          <TitleText>역활</TitleText>
          <InfoText>
            PM / 기획 / 프론트엔드 개발(메인페이지, QnA페이지, 일정 생성 페이지,
            반응형 작업)
          </InfoText>
        </Itroduce>
        <Itroduce>
          <TitleText>화면</TitleText>
          <InfoText>웹 페이지</InfoText>
          <Carousel data={webData} />
          <InfoText>반응형 페이지</InfoText>
          <Carousel data={data} />
        </Itroduce>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: 85vh;
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
`;

const ContentWrapper = styled.div``;

const Itroduce = styled.div`
  margin-bottom: 24px;
`;

const TitleText = styled.p`
  font-size: 30px;
`;

const InfoText = styled.p``;
