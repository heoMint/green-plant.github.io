import styled from 'styled-components';
function Header() {
  return (
    <S.NavWrapper>
      <S.Log>
        <img
          src='/Logo.png'
          alt='Logo'
        />
      </S.Log>
      <S.TapWrapper>
        <S.Tap>
          <li>식물원 이야기</li>
          <li>시설안내</li>
          <li>둘러보기</li>
          <li>참여하기</li>
          <li>식물정보</li>
          <li>푸른수목원</li>
        </S.Tap>
        <S.Lang>KR</S.Lang>
      </S.TapWrapper>
    </S.NavWrapper>
  );
}

export default Header;

const S = {
  NavWrapper: styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    position: absolute; // 위치를 배너 위에 고정
    top: 0;
    width: 100%;
    z-index: 100;

    background: rgba(255, 255, 255, 0.19);
    backdrop-filter: blur(2.8px);
    -webkit-backdrop-filter: blur(2.8px);
  `,
  Log: styled.div`
    img {
      width: 150px;
    }
  `,
  TapWrapper: styled.div`
    display: flex;
  `,
  Lang: styled.li`
    list-style: none;
    font-weight: 600;
    width: 100px;
    height: auto;
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; /* 추가 */
  `,
  Tap: styled.ul`
    list-style: none;
    display: flex;
    li {
      font-weight: 600;
      width: 100px;
      height: auto;
      /* padding: 10px; */
      display: flex;
      justify-content: center;

      background-size: 200% 100%;
      background-position: -100%;
      padding: 5px 0;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.3s ease-in-out;
      background-image: linear-gradient(
        to right,
        #ffd93d,
        #ffd93d 50%,
        #000 50%
      );

      &::after {
        content: '';
        background: #ffd93d;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        background-position: 0;
      }
      &:hover::after {
        width: 100%;
      }
    }
  `,
};
