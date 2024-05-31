import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { ContentItemsSet1 } from '../../context/data';
import { ArrowUpRight } from 'react-feather';
const FirstCard = () => {
  // video에 hover시 썸네일 재생여부
  const [hover, setHover] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInitialLoad) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 페이지가 로드된 후에는 스크롤 이벤트를 감지
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInitialLoad]);

  return (
    <S.BoxWrapper>
      {ContentItemsSet1.map(({ id, videoUrl, boxStyle, videoTitle }) => (
        <S.Box
          key={id}
          style={{
            ...boxStyle,
            transform: `translateY(-${scrollY * 0.3}px)`, // 스크롤 위치에 따라 카드를 위로 이동
          }}
        >
          <S.VideoItem
            onMouseOver={() => setHover(id)}
            onMouseOut={() => setHover(null)}
          >
            <S.ThumbnailWrapper>
              <ReactPlayer
                url={videoUrl}
                playing={hover === id}
                muted={true}
                width='100%'
                height='500px'
              />

              <S.TitleWrapper>
                <S.Title>{videoTitle}</S.Title>
                <S.Icon>
                  <ArrowUpRight size={32} />
                </S.Icon>
              </S.TitleWrapper>
            </S.ThumbnailWrapper>
          </S.VideoItem>
        </S.Box>
      ))}
    </S.BoxWrapper>
  );
};

const S = {
  BoxWrapper: styled.div`
    margin-top: 1700px;
    display: flex;
    width: 100%;

  `,
  Box: styled.div`
    transition: transform 0.7s ease-in; // transform 변경 시 부드러운 애니메이션 적용
  `,
  VideoItem: styled.div``,
  ThumbnailWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,

  TitleWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  `,
  Title: styled.h2`
    padding: 8px;
    height: 30px;
  `,
  Icon: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid black;
    border-radius: 50%;
  `,
};
export default FirstCard;
