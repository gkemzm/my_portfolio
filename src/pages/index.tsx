import { Inter } from 'next/font/google';
import styled, { keyframes } from 'styled-components';
import { FiChevronUp, FiChevronsDown } from 'react-icons/fi';
import { MenuButton } from '../component/menuButton';
import { Profile } from '../component/profile';
import { Technique } from '../component/technique';
import { Carrer } from '../component/career';
import { Contact } from '../component/contact';
import { useEffect, useMemo, useRef, useState } from 'react';

const menu = ['Profile', 'Stack', 'Career', 'Contact'];

export default function Home() {
  const profileFocusRef = useRef<null | HTMLDivElement>(null);
  const stackFocusRef = useRef<null | HTMLDivElement>(null);
  const carrerFocusRef = useRef<null | HTMLDivElement>(null);
  const contactFocusRef = useRef<null | HTMLDivElement>(null);

  const [positionY, setPositionY] = useState(0);
  const [currentItem, setCurrentItem] = useState('home');

  const getScrollPostion = () => {
    if (window.scrollY > 0) {
      setPositionY(window.scrollY);
    } else {
      return;
    }
  };

  const moveItem = (item: string) => {
    switch (item) {
      case 'Profile':
        setCurrentItem('Profile');
        return profileFocusRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      case 'Stack':
        setCurrentItem('Stack');
        return stackFocusRef.current?.scrollIntoView({
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
    const StackY = stackFocusRef?.current?.offsetTop;
    const carrerY = carrerFocusRef?.current?.offsetTop;
    const contactY = contactFocusRef?.current?.offsetTop;

    if (profileY && StackY && carrerY && contactY) {
      if (positionY < 500) {
        setCurrentItem('home');
      } else if (profileY - 200 < positionY && positionY < StackY - 200) {
        setCurrentItem('Profile');
      } else if (StackY - 200 < positionY && positionY < carrerY - 200) {
        setCurrentItem('Stack');
      } else if (carrerY - 200 < positionY && positionY < contactY - 200) {
        setCurrentItem('Career');
      } else if (contactY - 200 < positionY) {
        setCurrentItem('Contact');
      }
    }

    return (
      <BtnWrapper $Point={positionY - 200}>
        {positionY > 600 && positionY ? (
          <HomeButton onClick={() => moveItem('home')}>
            <FiChevronUp width={200} height={200} color="white" />
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
  }, [positionY, currentItem]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

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
        <Title>Front-end Developer</Title>
        <Name>Park Bum Soo - Portfolio</Name>
      </ProfileWrapper>
      <NavBar>{changeNavBar}</NavBar>
      <IconWrapper onClick={() => moveItem('Profile')}>
        <FiChevronsDown size={'48'} />
      </IconWrapper>
      <ContentsWrapper>
        <Content ref={profileFocusRef}>
          <Profile />
        </Content>
        <Content ref={stackFocusRef}>
          <Technique />
        </Content>
        <Content ref={carrerFocusRef}>
          <Carrer />
        </Content>
        <Content ref={contactFocusRef}>
          <Contact />
        </Content>
      </ContentsWrapper>

      <TopIcon
        onClick={() => moveItem('home')}
        $isDisplay={currentItem === 'home'}
      >
        <FiChevronUp width={100} height={100} color="white" />
      </TopIcon>

      <Fotter $Point={positionY - 200}>
        <ForrterContent $Point={positionY - 200}>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    min-width: 360px;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;

  width: 1024px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-family: 'Dongle_L';
  font-size: 64px;
  animation: ${show} 0.5s 0s 1 linear alternate;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

const Name = styled.h2`
  font-family: 'Dongle_L';
  font-size: 64px;
  opacity: 0;
  animation: ${show} 0.5s 0.5s 1 linear alternate;
  animation-fill-mode: both;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

const NavBar = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 1;

  animation-name: fadeout;
  animation: fadeout 0.5s 1s 1 linear alternate;
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

const IconWrapper = styled.div`
  padding-top: 300px;
  animation-name: show;
  animation: fadeout 0.5s 1.5s 1 linear alternate;
  animation-fill-mode: both;

  @keyframes fadeout {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  cursor: pointer;
`;

const BtnWrapper = styled.div<{ $Point: number }>`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $Point }) => ($Point > 400 ? 'black' : 'none')};
  transition: 0.3s;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 400px;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Fotter = styled.div<{ $Point: number }>`
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: ${({ $Point }) => ($Point > 400 ? 'black' : 'none')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
`;

const ForrterContent = styled.p<{ $Point: number }>`
  display: ${({ $Point }) => ($Point > 400 ? 'grid' : 'none')};
  color: white;
  font-family: 'Dongle L';
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const TopIcon = styled.div<{ $isDisplay: boolean }>`
  display: ${({ $isDisplay }) => ($isDisplay ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: black;
  position: fixed;
  bottom: 80px;
  right: 20px;
  border-radius: 50px;

  cursor: pointer;
`;
