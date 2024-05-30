import styled from 'styled-components';
import FirstCard from '../pages/Main/FirstCard';
import SecondCard from '../pages/Main/secondCard';
import ThirdCard from '../pages/Main/ThirdCard';

const Content = () => {
  return (
    <S.ContentWrapper>
      <S.Contents>
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </S.Contents>
      {/* <S.Circle>
        <img
          src='/public/circle.svg'
          alt='동그라미들'
        />
      </S.Circle> */}
    </S.ContentWrapper>
  );
};

const S = {
  ContentWrapper: styled.div`
    /* width: 100%; */
  `,
  Contents: styled.div`
    transform: translateY(20%);
  `,

  // Circle: styled.div`
  //   width: 50%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   transform: translate(750px,-300px);
  //   img {
  //     width: 100%; /* 부모 요소에 맞게 이미지 크기 조정 */
  //     /* height: 100%; 부모 요소에 맞게 이미지 크기 조정 */
  //     object-fit: cover; /* 이미지가 부모 요소에 꽉 차도록 설정 */
  //     object-position: center; /* 이미지를 가운데 정렬 */
  //   }
  // `,
};
export default Content;
