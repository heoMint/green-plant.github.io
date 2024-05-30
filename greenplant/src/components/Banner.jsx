import ReactPlayer from 'react-player';
import MouseWheel from '../utils/MouseWheel';
import styled from 'styled-components';
const Banner = () => {
  return (
    <S.BannerWrapper>
      <ReactPlayer
        url='https://www.youtube.com/live/_u36muyjh8A?si=7pucQodPQi1zWvEM'
        playing={true}
        width='100vw'
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
