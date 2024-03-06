import styled from 'styled-components';

export const Technique = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Stack</Title>
        <ContentBox>
          <></>
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
  width: 100%;
  height: 93%;
  border-radius: 10px;
  background-color: white;
`;
const InfoText = styled.p`
  font-size: 36px;
  line-height: 48px;
`;
