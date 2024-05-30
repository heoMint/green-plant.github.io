import ReactPlayer from 'react-player';

const ContentCard = () => {
  return (
    <>
        <ReactPlayer
          url='/public/7048759-uhd_3840_2160_30fps.mp4'
          playing={true}
          muted={true}
          width='600px'
          height='auto'
        />
    </>
  );
};

export default ContentCard;
