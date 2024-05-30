import { useRef } from 'react';
import styled from 'styled-components';

const Section = () => {
  const sectionRef = useRef(null);

  return (
    <SectionWrapper ref={sectionRef}>
      <Image
        src='src/assets/leaf.jpg'
        alt='유칼립투스'
        style={{ backgroundColor: 'red' }}
      />
      <Image
        src='src/assets/leaf.jpg'
        alt='유칼립투스'
        style={{ backgroundColor: 'green' }}
      />
      <Image
        src='src/assets/leaf.jpg'
        alt='유칼립투스'
        style={{ backgroundColor: 'blue' }}
      />
      <Image
        src='src/assets/leaf.jpg'
        alt='유칼립투스'
        style={{ backgroundColor: 'yellow' }}
      />
      <Image
        src='src/assets/leaf.jpg'
        alt='유칼립투스'
        style={{ backgroundColor: 'purple' }}
      />
      <Image
        src='src/assets/leaf.jpg'
        alt='유칼립투스'
        style={{ backgroundColor: 'orange' }}
      />
      <VerticalContent>
        <p>이것은 세로 스크롤 콘텐츠입니다.</p>
        <p>이것은 세로 스크롤 콘텐츠입니다.</p>
        <p>이것은 세로 스크롤 콘텐츠입니다.</p>
      </VerticalContent>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  scroll-snap-align: start;
`;

const VerticalContent = styled.div`
  width: 100vw;
  height: 200vh; /* 세로 스크롤을 테스트하기 위해 높이 증가 */
  background: #f0f0f0;
  display: block;
`;

// const S = {
//   SectionWrapper: styled.div`
//     position: relative;
//     width: 100vw; /* 화면 너비에 맞게 설정 */
//     height: 100vh; /* 화면 높이에 맞게 설정 */
//     display: flex;
//     align-items: center;

//     img {
//       width: 100%; /* 부모 요소에 맞게 이미지 크기 조정 */
//       height: 100%; /* 부모 요소에 맞게 이미지 크기 조정 */
//       object-fit: cover; /* 이미지가 부모 요소에 꽉 차도록 설정 */
//       object-position: center; /* 이미지를 가운데 정렬 */
//     }
//   `,
// };

export default Section;
