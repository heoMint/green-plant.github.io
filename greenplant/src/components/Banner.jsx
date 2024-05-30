import ReactPlayer from 'react-player';
import MouseWheel from '../utils/MouseWheel';
import styled from 'styled-components';
const Banner = () => {
  return (
    <S.BannerWrapper>
      <ReactPlayer
        url='/public/banner.mp4'
        playing={true}
        width='100%'
        height='100vh'
      />

      <MouseWheel />
    </S.BannerWrapper>
  );
};

export default Banner;

const S = {
  BannerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:nth-child(1) {
      position: relative;
    }
  `,
};
