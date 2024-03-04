import styled from 'styled-components';
import Image from 'next/image';

const info = {
  name: '박범수',
  phone: '010-5197-9336',
  email: 'gkemzm@gmail.com',
};
export const Profile = () => {
  return (
    <Wrapper>
      <ImageBox></ImageBox>
      <ProfileBox>
        <InfoText>NAME : {info.name}</InfoText>
        <InfoText>PHONE : {info.phone}</InfoText>
        <InfoText>EMAIL ADDRESS : {info.email}</InfoText>
      </ProfileBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  padding: 0px 40px 40px 40px;
`;
const ImageBox = styled.div`
  width: 50%;
  border: 1px solid black;
`;

const ProfileBox = styled.div`
  width: 50%;

  border: 1px solid black;
`;
const InfoText = styled.p`
  line-height: 36px;
`;
