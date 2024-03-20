import styled from 'styled-components';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef();
  const [submitData, setSubmitData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r882pyn', 'template_zcjxcvs', formRef.current, {
        publicKey: 'zxtTqEkoxsrvcLhxu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSuccess(false);
        }
      );

    e.target.reset();
  };

  const onChangeSubmitData = (type, value) => {
    switch (type) {
      case 'name':
        return setSubmitData({ ...submitData, name: value });
      case 'email':
        return setSubmitData({ ...submitData, email: value });
      case 'message':
        return setSubmitData({ ...submitData, message: value });
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Contact</Title>
        <ContentBox
          // action="https://script.google.com/macros/s/AKfycbzxoKn_cKteaLCVBetRUF0YeMMKZHbEL3bx6pe-fCmHo1-P5Q38E2FY759bueXM_zs0/exec"
          // method="POST"
          // data-email="gkemzm@gmail.com"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <ContentItem $width={'612px'} $column>
            <NameBox>
              <InfoText>Name</InfoText>
            </NameBox>
            <CustomInput
              type="text"
              name="user_name"
              placeholder="ex)홍길동"
              required
              onChange={(e) => onChangeSubmitData('name', e.target.value)}
            />
          </ContentItem>

          <ContentItem $width={'612px'} $column>
            <NameBox>
              <InfoText>E-mail</InfoText>
            </NameBox>
            <CustomInput
              type="email"
              name="user_email"
              placeholder="ex)yourEmailId@example.com"
              required
              onChange={(e) => onChangeSubmitData('email', e.target.value)}
            />
          </ContentItem>

          <ContentItem $width={'612px'} $column>
            <NameBox>
              <InfoText>Message</InfoText>
            </NameBox>
            <CustomTextArea
              name="message"
              onChange={(e) => onChangeSubmitData('message', e.target.value)}
            />
          </ContentItem>

          <BtnWrapper>
            <ContentsBtn type="submit">Submit</ContentsBtn>
          </BtnWrapper>

          {isSuccess && (
            <InfoText>
              연락주셔서 감사합니다. 빠른 시일내에 답변드리겠습니다.
            </InfoText>
          )}
        </ContentBox>
      </ContentWrapper>
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

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

const ContentItem = styled(FlexRow)`
  flex-direction: column;
  width: ${({ $width }) => $width && $width};
  align-items: flex-start;
  margin-bottom: 12px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 36px;
  line-height: 48px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px #0000004b;
`;

const ContentBox = styled.form`
  width: 100%;
  height: 93%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InfoText = styled.p`
  font-size: 36px;
  line-height: 48px;
`;

const CustomInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 12px;
  box-shadow: 1px 1px 4px #bebebe;
  width: 240px;
`;

const CustomTextArea = styled.textarea`
  resize: none;
  padding: 8px;
  border: none;
  border-radius: 12px;
  box-shadow: 1px 1px 4px #bebebe;
  width: 100%;
  height: 200px;
`;

const BtnWrapper = styled.div`
  margin: 20px 0px;
  :hover {
    background-color: black;
    transition: 0.7s;
  }
`;

const ContentsBtn = styled.button`
  display: flex;
  align-items: center;
  width: 240px;
  height: 60px;
  font-size: 20px;
  color: white;
  border: none;
  background-color: ${({ isCurrent }) => (isCurrent ? 'black' : '#3f22226c')};
  box-shadow: 3px 3px 5px black;
  border-radius: 13px;
  margin: 0px 12px;
  padding: 0 24px;

  cursor: pointer;
`;

const NameBox = styled.div`
  width: ${({ $width }) => $width && $width};
`;
