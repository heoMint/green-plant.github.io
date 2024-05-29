import styled from 'styled-components';
import FirstCard from '../pages/Main/FirstCard';
import SecondCard from '../pages/Main/secondCard';
import ThirdCard from '../pages/Main/ThirdCard';

const Content = () => {
  return (
    <S.ContentWrapper>
      <S.Contents>
        <div>
          <FirstCard />
        </div>
        <div>
          <SecondCard />
        </div>
        <div>
          <ThirdCard />
        </div>
      </S.Contents>
    </S.ContentWrapper>
  );
};

const S = {
  ContentWrapper: styled.div`
    width: 100%;
  `,
  Contents: styled.div`
    height: 100hv;
  `,
  FirstBox: styled.div``,
};
export default Content;
