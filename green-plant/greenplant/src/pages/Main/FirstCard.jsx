import { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { ContentItemsSet1 } from '../../context/data';
import { ArrowUpRight } from 'react-feather';
const FirstLineCard = () => {
  // video에 hover시 썸네일 재생여부
  const [hover, setHover] = useState(false);

  return (
    <S.BoxWrapper>
      {ContentItemsSet1.map(({ id, videoUrl, boxStyle, videoTitle }) => (
        <S.Box
          key={id}
          style={boxStyle}
        >
          <S.VideoItem
            onMouseOver={() => setHover(id)}
            onMouseOut={() => setHover(null)}
          >
            <S.ThumbnailWrapper>
              {/* <S.Thumbnail
                src={thumbnailUrl}
                alt='Thumbnail'
              /> */}
              <ReactPlayer
                url={videoUrl}
                playing={false}
                width='100%'
                height='auto'
              />
              {hover === id && (
                <S.Overlay>
                  <ReactPlayer
                    url={videoUrl}
                    muted={true}
                    width='100%'
                    height='auto'
                    playing={true}
                  />
                </S.Overlay>
              )}
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
    display: flex;
    width: 100%;
    margin-bottom: 300px;
  `,
  Box: styled.div`
    /* flex-grow: ${(props) => props.style.flexGrow || 1}; */
    position: relative;
  `,
  VideoItem: styled.div`
    /* width: 100%; */
  `,
  ThumbnailWrapper: styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
  `,

  Overlay: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    /* width: 100%; */
    height: auto;
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
export default FirstLineCard;
