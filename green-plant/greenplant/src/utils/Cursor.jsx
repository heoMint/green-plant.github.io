import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './styles.css'; // 필요한 스타일을 여기에 추가

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window;

    if (!isTouchDevice) {
      const $el = cursorRef.current;

      const handleMouseMove = (e) => {
        const { target, clientX: x, clientY: y } = e;
        // Check if target is inside a link or button
        const isTargetLinkOrBtn =
          target?.closest('a') || target?.closest('button');
        // GSAP config
        gsap.to($el, {
          x: x + 3,
          y: y + 3,
          duration: 0.7,
          ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
          opacity: isTargetLinkOrBtn ? 0.6 : 1,
          transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
        });
      };

      const handleMouseLeave = () => {
        gsap.to($el, {
          duration: 0.7,
          opacity: 0,
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      className='cursor-follower'
      ref={cursorRef}
    ></div>
  );
};

export default Cursor;
