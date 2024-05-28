import styled from 'styled-components';
import Header from './Header';
import ReactPlayer from 'react-player';
import video from '/public/15462800-uhd_3840_2160_30fps.mp4';
const Banner = () => {
  return (
    <>
      <S.Banner>
        <S.BannerWrapper>
          <Header />
          <ReactPlayer
            url={video}
            playing={true}
            width='100%'
            height='auto'
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
