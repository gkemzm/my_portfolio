import { Inter } from 'next/font/google';
import styled, { keyframes } from 'styled-components';
import { FiChevronUp } from 'react-icons/fi';
import { MenuButton } from '../component/menuButton';
import { Profile } from '../component/profile';
import { Technique } from '../component/technique';
import { Carrer } from '../component/career';
import { Contact } from '../component/contact';
import { useEffect, useMemo, useRef, useState } from 'react';

const menu = ['Profile', 'Technique', 'Career', 'Contact'];

export default function Home() {
  const profileFocusRef = useRef(null);
  const techniqueFocusRef = useRef(null);
  const carrerFocusRef = useRef(null);
  const contactFocusRef = useRef(null);

  const [positionY, setPositionY] = useState(0);
  const [currentItem, setCurrentItem] = useState('home');
  const [screenHeight, setScreenHeight] = useState(1400);

  const getScrollPostion = () => {
    if (window.scrollY > 0) {
      setPositionY(window.scrollY);
    } else {
      return;
    }
  };

  const moveItem = (item) => {
    switch (item) {
      case 'Profile':
        setCurrentItem('Profile');
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
      case 'Career':
        setCurrentItem('Career');
        return carrerFocusRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      case 'Contact':
        setCurrentItem('Contact');
        return contactFocusRef.current?.scrollIntoView({
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
        setCurrentItem('home');
        return window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
    }
  };

  const changeNavBar = useMemo(() => {
    const profileY = profileFocusRef?.current?.offsetTop;
    const techniqueY = techniqueFocusRef?.current?.offsetTop;
    const carrerY = carrerFocusRef?.current?.offsetTop;
    const contactY = contactFocusRef?.current?.offsetTop;

    if (positionY < 500) {
      setCurrentItem('home');
    } else if (profileY - 200 < positionY && positionY < techniqueY - 200) {
      setCurrentItem('Profile');
    } else if (techniqueY - 200 < positionY && positionY < carrerY - 200) {
      setCurrentItem('Technique');
    } else if (carrerY - 200 < positionY && positionY < contactY - 200) {
      setCurrentItem('Career');
    } else if (contactY - 200 < positionY) {
      setCurrentItem('Contact');
    }

    return (
      <BtnWrapper Point={positionY - 200}>
        {positionY > 600 && positionY ? (
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

  useEffect(() => {
    const screenHeight = window.screen.height;

    setScreenHeight(screenHeight);
  });

  https: return (
    <Wrapper>
      <ProfileWrapper>
        <Title>Front-end Developer</Title>
        <Name>Park Bum Soo - Portfolio</Name>
      </ProfileWrapper>
      <NavBar>{changeNavBar}</NavBar>

      <ContentsWrapper>
        <Content ref={profileFocusRef}>
          <Profile />
        </Content>
        <Content ref={techniqueFocusRef}>
          <Technique />
        </Content>
        <Content ref={carrerFocusRef}>
          <Carrer />
        </Content>
        <Content ref={contactFocusRef}>
          <Contact />
        </Content>
      </ContentsWrapper>

      <Fotter Point={positionY - 200}>
        <ForrterContent Point={positionY - 200}>
          Park BumSoo | Front-end Portfolio | Email : gkemzm@gmail.com
        </ForrterContent>
      </Fotter>
      <div id="portal"></div>
    </Wrapper>
  );
}

const show = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const Wrapper = styled.div`
  padding: 140px 0;
  min-width: 1400px;
  margin: auto;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;

const Title = styled.h1`
  font-family: 'Dongle_L';
  font-size: 96px;
  animation: ${show} 1s 0s 1 linear alternate;
`;

const Name = styled.h2`
  font-family: 'Dongle_L';
  font-size: 96px;
  opacity: 0;
  animation-name: show;
  animation: ${show} 1s 1s 1 linear alternate;
  animation-fill-mode: both;
`;

const NavBar = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 1;

  animation-name: fadeout;
  animation: fadeout 1s 2s 1 linear alternate;
  animation-fill-mode: both;

  @keyframes fadeout {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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

const Fotter = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: ${({ Point }) => (Point > 400 ? 'black' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
`;

const ForrterContent = styled.p`
  display: ${({ Point }) => (Point > 400 ? 'grid' : 'none')};
  color: white;
  font-family: 'Dongle L';
  font-size: 20px;
`;
