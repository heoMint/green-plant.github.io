import Banner from '../../components/Banner';
import Content from '../../components/Content';
import Section from '../../components/Section';
import SlidePage from '../pagination/SlidePage';
import styled from 'styled-components';

const Main = () => {
  return (
    <div>
      <S.BannerWrapper></S.BannerWrapper>
      <Banner />
      <S.SectionWrapper>
        <Section />
      </S.SectionWrapper>
      <Content />
      <SlidePage />
    </div>
  );
};

export default Main;

const S = {
  BannerWrapper: styled.div``,
  SectionWrapper: styled.div`
    position: relatives;
  `,
};
