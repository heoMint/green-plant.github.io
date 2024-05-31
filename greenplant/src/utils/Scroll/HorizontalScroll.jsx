import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import './styles.css';
import TextEffect from '../TextEffect';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (panels.length - 1),
          end: () => '+=' + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });
  return (
    <div
      className='HorizontalScroll'
      ref={component}
    >
      <div className='firstContainer'>
        <TextEffect />
      </div>
      <div
        ref={slider}
        className='container'
      >
        <div className='panel red'></div>
        <div className='panel orange'>TWO</div>
        <div className='panel purple'>THREE</div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
