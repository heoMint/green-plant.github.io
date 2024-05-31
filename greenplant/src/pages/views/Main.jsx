import Banner from '../../components/Banner';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Section from '../../components/Section';

// import TextEffect from '../../utils/TextEffect';
import styled from 'styled-components';
import SlidePage from '../pagination/SlidePage';
import TextEffectRight from '../../utils/TextEffectRight';
import HorizontalScroll from '../../utils/Scroll/HorizontalScroll';

const Main = () => {
  return (
    <div>
      <S.MainWrapper>
        <Banner />
        {/* <TextEffect /> */}
        <HorizontalScroll />

        <Section />
        <S.SquareBox>
          <div></div>
          <TextEffectRight />
        </S.SquareBox>

        <Content />
        <S.SlidePageWrapper>
          <SlidePage />
        </S.SlidePageWrapper>
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
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  `,
  SquareBox: styled.div`
    position: absolute;
    top: 3000px;
    width: 100%;
    z-index: -3;

    div:nth-child(1) {
      width: 200px;
      height: 600px;
      background-color: #6bcb77;
      transform: translate(150%, 20%);
    }
    div:nth-child(2) {
      transform: translate(70%, 21%);
      width: 800px;
      color: #c0c0c0;
    }
  `,
  SlidePageWrapper: styled.div`
    position: relative;
    width: 90%;
    transform: translateX(10%);
  `,
  FooterWrapper: styled.div`
    position: absolute;
    bottom: -7%;
  `,
};
