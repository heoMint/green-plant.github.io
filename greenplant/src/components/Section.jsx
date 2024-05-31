import styled, { keyframes } from 'styled-components';
import ContentCard from './ContentCard';
import { useEffect, useState } from 'react';
import 'animate.css';

const Section = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [animateSubtitle, setAnimateSubtitle] = useState(false);
  const [isContentCardItem, setIsContentCardItem] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInitialLoad) {
        setScrollY(window.scrollY);
        // console.log(window.scrollY);
        // 스크롤 위치가 9260 이하이면 애니메이션 상태를 false로 설정
        if (window.scrollY <= 9260) {
          setAnimateSubtitle(false);
          setIsContentCardItem(false);
        }
        // 스크롤 위치가 9260 이상이면 애니메이션 상태를 true로 설정
        else if (window.scrollY >= 9260) {
          setAnimateSubtitle(true);
          setIsContentCardItem(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setIsInitialLoad(false);
    }, 500); // 페이지가 로드된 후 0.5초 뒤에 스크롤 감지 시작

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInitialLoad]);

  return (
    <SectionWrapper>
      <S.SubTitle className={`${animateSubtitle ? 'animate__fadeInLeft' : ''}`}>
        <h3>BUSINESS AREA</h3>
        <p>
          PFAS Free, Repulpable, Compostable의 가치는
          <br />
          우리 Green Plant가 나아가고자 하는 방향입니다.
        </p>
      </S.SubTitle>
      <>
        <S.SectionCard
          className={`${isContentCardItem ? 'animate__fadeInUp' : ''}`}
        >
          <ContentCard />

        </S.SectionCard>
      </>

      <Image
        src='src/assets/leaf.jpg'
        alt='유칼립투스'
        style={{ backgroundColor: 'orange' }}
      />
    </SectionWrapper>
  );
};

const moveInRight = keyframes`
  from {

    transform: translateX(-600px);
  }
  to {

    transform: translateX(150px);
  }
`;

const moveInUp = keyframes`
  from {
      opacity: 0;
      transform: translate(150px, 900px);
  }
  to {
      opacity: 1;
      transform: translate(150px, 0);
  }
`;
const S = {
  SectionCard: styled.div`
    display: flex;
    transform: translate(150px, 900px);
    /* 애니메이션 CSS를 추가 */
    &.animate__fadeInUp {
      animation-duration: 2s;
      animation-fill-mode: both;
      animation-name: ${moveInUp};
    }
    a {
      margin-right: 30px;
      font-size: 10px;
      h3 {
        padding-top: 20px;
        font-size: 1.5rem;
        font-weight: 700;
      }

      div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
  `,

  SubTitle: styled.div`
    display: flex;
    transform: translateX(-600px);
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    width: 500px;
    font-size: 14px;

    h3 {
      font-size: 1.4em;
      color: #6bcb77;
      padding-bottom: 10px;
    }
    p:nth-child(2) {
      color: #222;
      font-size: 1.8em;
      margin-bottom: 50px;
    }
    /* 애니메이션 CSS를 추가 */
    &.animate__fadeInLeft {
      animation-duration: 2s;
      animation-fill-mode: both;
      animation-name: ${moveInRight};
    }
  `,
};
const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  scroll-snap-align: start;
`;

export default Section;
