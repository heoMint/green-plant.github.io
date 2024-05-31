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
        height='100%'
      />
      <MouseWheel />
      <S.BannerTitle>
        <h3>자연을 생각합니다.</h3>
        <p>폐기된 섬유를 새로운 기회로</p>
      </S.BannerTitle>
    </S.BannerWrapper>
  );
};

export default Banner;

const S = {
  BannerTitle: styled.div`
    transform: translate(-50%, -450%);
    color: white;
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 3rem;
      letter-spacing: 1.2px;
    }
  `,
  BannerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #ffd93d; */
    &:nth-child(1) {
      position: relative;
      top: -90px;
    }
  `,
};
