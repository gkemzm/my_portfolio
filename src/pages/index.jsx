import { Inter } from 'next/font/google';
import styled from 'styled-components';
import { FiChevronUp } from 'react-icons/fi';
import { MenuButton } from '../component/menuButton';
import { Profile } from '../component/profile';
import { Technique } from '../component/technique';
import { useEffect, useMemo, useState } from 'react';

const menu = ['Intro & Profile', 'Technique', 'Career', 'Contect'];

export default function Home() {
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
        return window.scrollTo({
          top: 955,
          left: 0,
          behavior: 'smooth',
        });
      case 'Technique':
        return window.scrollTo({
          top: 1848,
          left: 0,
          behavior: 'smooth',
        });
      case 'home':
        return window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      default:
        return console.log(window.scrollY, 'window.scrollY');
    }
  };

  const changeNavBar = useMemo(() => {
    if (positionY > 940 && positionY < 1840) {
      setCurrentItem('Intro & Profile');
    } else if (positionY >= 1840) {
      setCurrentItem('Technique');
    } else {
      setCurrentItem('home');
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
        <Content>
          <Profile />
        </Content>
        <Content>
          <Technique />
        </Content>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 140px;
  min-width: 1400px;
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
  position: sticky;
  top: 0px;
`;

const BtnWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ Point }) => (Point > 400 ? 'black' : 'none')};
  transition: 0.7s;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 500px;
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
