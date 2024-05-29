import styled from 'styled-components';
import Header from './Header';
import ReactPlayer from 'react-player';
const Banner = () => {
  return (
    <>
      <S.Banner>
        <S.BannerWrapper>
          <Header />
          <ReactPlayer
            url='https://www.youtube.com/live/lCvQwnDCq6k?si=5nFg-4lSxdwSZ8SU'
            playing={true}
            width='100%'
            height='100vh'
          />
        </S.BannerWrapper>
      </S.Banner>
    </>
  );
};
const S = {
  Banner: styled.div`
    position: relative;
    width: 100%;
  `,
  BannerWrapper: styled.div`
    position: relative;
  `,
};
export default Banner;
