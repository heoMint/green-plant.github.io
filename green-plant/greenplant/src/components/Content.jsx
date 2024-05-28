import styled from 'styled-components';
import FirstLineCard from '../pages/Main/FirstLineCard';
import SecondLineCard from '../pages/Main/SecondLineCard';
import ThirdLineCard from '../pages/Main/ThirdLineCard';

const Content = () => {
  return (
    <S.ContentWrapper>
      <S.Contents>
        <div>
          <FirstLineCard />
        </div>
        <div>
          <SecondLineCard />
        </div>
        <div>
          <ThirdLineCard />
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
