import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const TextEffectRight = () => {
  useEffect(() => {
    const textElements = gsap.utils.toArray('.text1');

    textElements.forEach((text1) => {
      gsap.to(text1, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text1,
          start: ' 90%',
          end: '20%',
          scrub: true,
        },

      });
    });
  }, []);

  return (
    <Container>
      <Text className='text1'>Lorem, ipsum dolor</Text>
      <Text className='text1'>sit amet consectetur</Text>
      <Text className='text1'>adipisicing elit.</Text>
    </Container>
  );
};

const Container = styled.div`
  margin-top: -600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Text = styled.h1`
  font-size: 7rem;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  width: 100%;
  color: rgb(182, 182, 182, 0.2);
  background: linear-gradient(to right, #dbdbdb, #dbdbdb) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(0.5, 0.8, 0.5, 1) 1s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fc5404;
    color: #0d0d0d;
    clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
    transform-origin: center;
    transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* &:hover > span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  } */

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default TextEffectRight;
