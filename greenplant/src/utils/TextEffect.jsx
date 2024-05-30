import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const TextEffect = () => {
  useEffect(() => {
    const textElements = gsap.utils.toArray('.text');

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: ' 90%',
          end: '20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <Container>
      <Text className='text'>
        Welcome to<span>Green Plant</span>
      </Text>
      <Text className='text'>
        Discover the<span>Serenity of Greenery</span>
      </Text>
      <Text className='text'>
        Your Trendy Destination<span>for Eco-Friendly Living</span>
      </Text>
      <Text className='text'>
        Enter Green Plant
        <span>
          <a
            href='https://stacksorted.com/text-effects/minh-pham'
            target='_blank'
            rel='noopener noreferrer'
          >
            Your of Eco-Excellence
          </a>
        </span>
      </Text>
      <Text className='text'>
        LIKE THIS?
        <span>
          <a
            href='https://twitter.com/juxtopposed'
            target='_blank'
            rel='noopener noreferrer'
          >
            LET`S CONTEXT
          </a>
        </span>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #ffd93d;
`;

const Text = styled.h1`
  font-size: 8em;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  width: 100%;
  color: rgb(182, 182, 182, 0.2);
  background: linear-gradient(to right, #6bcb77, #fc5404) no-repeat;
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

  &:hover > span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default TextEffect;
