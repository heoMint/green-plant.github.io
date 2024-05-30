/* eslint-disable no-undef */
import Lottie from 'lottie-react';
import styled from 'styled-components';
import AnimationMouseScroll from '../assets/lottie/Animation_mouse_scroll.json';

const MouseWheel = () => {
  return (
    <S.LottieWrapper>
      <Lottie
        animationData={AnimationMouseScroll}
        loop={true}
      />
      <div>Scroll</div>
    </S.LottieWrapper>
  );
};

export default MouseWheel;

const S = {
  LottieWrapper: styled.div`
    position: absolute;
    bottom: 5%;
    z-index: 5;
    width: 70px;
    display: grid;
    justify-items: center;
    color: white;
    font-weight: 100;
    letter-spacing: 2px;
  `,
};
