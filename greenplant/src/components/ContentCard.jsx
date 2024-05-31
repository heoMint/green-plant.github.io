import { ArrowRight } from 'react-feather';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { ContentCardData } from '../context/data';
const ContentCard = () => {
  return (
    <S.ContentCardWrapper>
      {ContentCardData.map(({ id, url, title, content }) => (
        <a key={id}>
          <ReactPlayer
            url={url}
            playing={true}
            muted={true}
            width='600px'
            height='500px'
            style={{ objectFit: 'cover' }}
          />
          <div>
            <h3>{title}</h3>
            <ArrowRight size={40} />
          </div>
          <S.ContentText>{content}</S.ContentText>
        </a>
      ))}
    </S.ContentCardWrapper>
  );
};

export default ContentCard;
const S = {
  ContentCardWrapper: styled.div`
    display: flex;
  `,
  ContentText: styled.p`
    padding: 10px 0;
    font-size: 1.3rem;
    font-weight: 200;
  `,
};
