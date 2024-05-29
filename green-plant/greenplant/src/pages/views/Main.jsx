import Banner from '../../components/Banner';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

import styled from 'styled-components';

const Main = () => {
  return (
    <div>
      <S.MainWrapper>
        <Banner />
        <S.SectionWrapper>
          <Section />
        </S.SectionWrapper>

        <S.SquareBox1>
          <div></div>
        </S.SquareBox1>
        <S.SquareBox2>
          <div></div>
        </S.SquareBox2>
        <Content />
        <S.FooterWrapper>
          <Footer />
        </S.FooterWrapper>
      </S.MainWrapper>
    </div>
  );
};

export default Main;

const S = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  SectionWrapper: styled.div``,
  SquareBox1: styled.div`
    width: 100%;
    div {
      width: 280px;
      height: 1000px;
      background-color: #6bcb77;
      transform: translateX(350%);
    }
  `,
  SquareBox2: styled.div`
    width: 100%;
    div {
      width: 100%;
      height: 600px;
      background-color: #ffd93d;
      transform: translateY(100%);
    }
    z-index: -3;
  `,
  FooterWrapper: styled.div`
    position: relative;
    left: 0;
    bottom: 0;
  `,
};
