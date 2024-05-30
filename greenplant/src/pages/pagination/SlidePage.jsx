import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideItemsSet } from '../../context/data';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
import styled from 'styled-components';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { ArrowUpRight } from 'react-feather';

export default function SlidePage() {
  return (
    <Swiper
      slidesPerView={1.4}
      spaceBetween={80}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='mySwiper'
    >
      {SlideItemsSet.map(({ id, imageURL, boxStyle, imageTitle }) => (
        <SwiperSlide
          key={id}
          style={boxStyle}
        >
          <img
            src={imageURL}
            alt='Slide img'
          />
          <S.TitleWrapper>
            <S.Title>{imageTitle}</S.Title>
            <S.Icon>
              <ArrowUpRight size={32} />
            </S.Icon>
          </S.TitleWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const S = {
  TitleWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    `,
  Title: styled.h2`
    padding: 20px 8px 8px 8px;
    height: 30px;
    background-color: transparent;
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
