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
};
export default Content;
