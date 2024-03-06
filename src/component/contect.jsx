import styled from 'styled-components';

export const Contect = () => {
  return (
    <Wrapper>
      <ContentBox>
        <InfoText>연락</InfoText>
      </ContentBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  padding: 0px 40px 40px 40px;
`;

const ContentBox = styled.div`
  width: 100%;

  border: 1px solid black;
`;
const InfoText = styled.p`
  line-height: 36px;
`;
