import styled from 'styled-components';
import FirstCard from '../pages/Main/FirstCard';
import SecondCard from '../pages/Main/secondCard';
import ThirdCard from '../pages/Main/ThirdCard';
import SlidePage from '../pages/pagination/SlidePage';

const Content = () => {
  return (
    <S.ContentWrapper>
      <S.Contents>
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </S.Contents>
      <S.Circle>
        <img
          src='/public/circle.svg'
          alt='동그라미들'
        />
      </S.Circle>
      <S.SlidePageWrapper>
        <SlidePage />
      </S.SlidePageWrapper>
    </S.ContentWrapper>
  );
};

const S = {
  ContentWrapper: styled.div`
    width: 100%;
  `,
  Contents: styled.div`
    height: 1100px;
    transform: translateY(-30%);
  `,
  SlidePageWrapper: styled.div`
    position: absolute;
    top: 600%;
    left: 130px;
    width: 90%;
  `,
  Circle: styled.div`
    overflow: hidden;
    width: 100%; /* 화면 너비에 맞게 설정 */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%; /* 부모 요소에 맞게 이미지 크기 조정 */
      height: 100%; /* 부모 요소에 맞게 이미지 크기 조정 */
      object-fit: cover; /* 이미지가 부모 요소에 꽉 차도록 설정 */
      object-position: center; /* 이미지를 가운데 정렬 */
    }
  `,
};
export default Content;
