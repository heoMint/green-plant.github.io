import styled from 'styled-components';

const Section = () => {
  return (
    <>
      <S.SectionWrapper>
        <img
          src='https://images.unsplash.com/photo-1716255254612-c0366e3bc5d5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='랜덤이미지'
        />
        <img
          src='https://images.unsplash.com/photo-1716255254612-c0366e3bc5d5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='랜덤이미지'
        />
        <img
          src='https://images.unsplash.com/photo-1716255254612-c0366e3bc5d5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='랜덤이미지'
        />
      </S.SectionWrapper>
    </>
  );
};

const S = {
  SectionWrapper: styled.div`
    width: 100vw; /* 화면 너비에 맞게 설정 */
    height: 100vh; /* 화면 높이에 맞게 설정 */
    display: flex;
    align-items: center;

    img {
      width: 100%; /* 부모 요소에 맞게 이미지 크기 조정 */
      height: 100%; /* 부모 요소에 맞게 이미지 크기 조정 */
      object-fit: cover; /* 이미지가 부모 요소에 꽉 차도록 설정 */
      object-position: center; /* 이미지를 가운데 정렬 */
    }
  `,
};

export default Section;
