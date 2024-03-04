import styled from 'styled-components';

export const MenuButton = ({ content, yPoint, currentItem }) => {
  return (
    <BtnWrapper yPoint={yPoint}>
      <ContentsBtn isCurrent={content === currentItem}>
        {content ? content : 'please content'}
      </ContentsBtn>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  :hover {
    background-color: black;
    transition: 0.7s;
    border: 1px solid ${({ yPoint }) => (yPoint > 400 ? 'white' : 'none')};
  }
`;

const ContentsBtn = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 60px;
  font-size: 28px;
  color: white;
  border: 1px solid ${({ isCurrent }) => (isCurrent ? 'white' : 'none')};
  background-color: ${({ isCurrent }) => (isCurrent ? 'black' : '#3f22226c')};
  box-shadow: 3px 3px 5px black;
  border-radius: 13px;
  margin: 0px 12px;
  padding: 0 24px;

  cursor: pointer;
`;
