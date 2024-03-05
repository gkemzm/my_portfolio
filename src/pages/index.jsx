import { Inter } from 'next/font/google';
import styled from 'styled-components';
import { FiChevronUp } from 'react-icons/fi';
import { MenuButton } from '../component/menuButton';
import { Profile } from '../component/profile';
import { Technique } from '../component/technique';
import { useEffect, useMemo, useRef, useState } from 'react';

const menu = ['Intro & Profile', 'Technique', 'Career', 'Contect'];

export default function Home() {
  const profileFocusRef = useRef(null);
  const techniqueFocusRef = useRef(null);

  const [positionY, setPositionY] = useState(0);
  const [currentItem, setCurrentItem] = useState('home');

  const getScrollPostion = () => {
    if (window.scrollY > 0) {
      setPositionY(window.scrollY);
    } else {
      return;
    }
  };

  const moveItem = (item) => {
    switch (item) {
      case 'Intro & Profile':
        setCurrentItem('Intro & Profile');
        return profileFocusRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      case 'Technique':
        setCurrentItem('Technique');
        return techniqueFocusRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      case 'home':
        setCurrentItem('home');
        return window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      default:
        return console.log(window.scrollY, 'window.scrollY1');
    }
  };

  const changeNavBar = useMemo(() => {
    const profileY = profileFocusRef?.current?.offsetTop;
    const techniqueY = techniqueFocusRef?.current?.offsetTop;

    if (positionY < 500) {
      setCurrentItem('home');
    } else if (profileY - 200 < positionY && positionY < techniqueY - 200) {
      setCurrentItem('Intro & Profile');
    } else if (techniqueY - 200 < positionY) {
      setCurrentItem('Technique');
    }
    return (
      <BtnWrapper Point={positionY}>
        {positionY > 500 && positionY ? (
          <HomeButton onClick={() => moveItem('home')}>
            <FiChevronUp width={100} height={100} color="white" />
          </HomeButton>
        ) : (
          <></>
        )}
        {menu.map((item) => (
          <div key={item} onClick={() => moveItem(item)}>
            <MenuButton
              content={item}
              yPoint={positionY}
              currentItem={currentItem}
            />
          </div>
        ))}
      </BtnWrapper>
    );
  }, [positionY]);

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', getScrollPostion);
    }, 1000);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', getScrollPostion);
    };
  }, []);

  https: return (
    <Wrapper>
      <ProfileWrapper>
        <Title>Front-end Portfolio</Title>
      </ProfileWrapper>
      <NavBar>{changeNavBar}</NavBar>

      <ContentsWrapper>
        <Content ref={profileFocusRef}>
          <Profile />
        </Content>
        <Content ref={techniqueFocusRef}>
          <Technique />
        </Content>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 140px 0;
  min-width: 1400px;
  margin: auto;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 140px;
`;

const Title = styled.h1`
  font-family: 'Dongle_L';
  font-size: 72px;
`;

const NavBar = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
`;

const BtnWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ Point }) => (Point > 400 ? 'black' : 'none')};
  transition: 0.3s;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 500px;
  max-width: 1920px;
  margin: auto;
`;

const Content = styled.div`
  width: 100%;
  padding-top: 100px;
`;

const HomeButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
