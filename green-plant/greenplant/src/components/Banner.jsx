import ReactPlayer from 'react-player';
const Banner = () => {
  return (
    <>
      <ReactPlayer
        url='https://www.youtube.com/live/lCvQwnDCq6k?si=5nFg-4lSxdwSZ8SU'
        playing={true}
        width='100%'
        height='100vh'
      />
    </>
  );
};

export default Banner;
