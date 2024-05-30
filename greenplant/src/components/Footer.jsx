import styled from 'styled-components';

const Footer = () => {
  return (
    <S.FooterBox>
      <li>저작권 정책</li>
      <li>서울식물원</li>
      <li>영상정보처리기기</li>
      <li>운영 관리방침</li>
      <li>행정서비스 헌장</li>
      <li>개인정보처리방침</li>
      <p>(우) 07789 서울 강서구 마곡동로 161 서울식물원</p>
      <p>Copyright©Seoul Metropolitan Government all rights reserved.</p>
    </S.FooterBox>
  );
};

const S = {
  FooterBox: styled.div`
    display: grid;
    width: 100vw;
    height: 315px;
    background-color: #ffd93d;
  `,
};
export default Footer;
