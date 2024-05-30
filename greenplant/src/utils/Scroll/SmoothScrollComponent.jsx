import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, Observer, ScrollSmoother);

const SmoothScrollComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Initialize ScrollSmoother
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    let sections = gsap.utils.toArray('.panel');
    let dragRatio = 1;
    let scrollTo;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.1,
        onRefresh: (self) => {
          dragRatio =
            (self.end - self.start) /
            ((sections.length - 1) * sections[0].offsetWidth);
        },
        end: '+=3000',
      },
    });

    Observer.create({
      target: container,
      type: 'wheel,touch,pointer',
      onPress: (self) => {
        self.startScroll = scrollTween.scrollTrigger.scroll();
        scrollTo = gsap.quickTo(scrollTween.scrollTrigger, 'scroll', {
          duration: 0.5,
          ease: 'power3',
        });
      },
      onDrag: (self) => {
        scrollTo(self.startScroll + (self.startX - self.x) * dragRatio);
      },
    });

    gsap.set('.box-1, .box-2', { y: 100 });
    ScrollTrigger.defaults({
      markers: { startColor: 'white', endColor: 'white' },
    });

    // red section
    gsap.to('.box-1', {
      y: -130,
      duration: 2,
      ease: 'elastic',
      scrollTrigger: {
        trigger: '.box-1',
        containerAnimation: scrollTween,
        start: 'left center',
        toggleActions: 'play none none reset',
        id: '1',
      },
    });

    // gray section
    gsap.to('.box-2', {
      y: -120,
      backgroundColor: '#1e90ff',
      ease: 'none',
      scrollTrigger: {
        trigger: '.box-2',
        containerAnimation: scrollTween,
        start: 'center 80%',
        end: 'center 20%',
        scrub: true,
        id: '2',
      },
    });

    // purple section
    ScrollTrigger.create({
      trigger: '.box-3',
      containerAnimation: scrollTween,
      toggleClass: 'active',
      start: 'center 60%',
      id: '3',
    });

    // green section
    ScrollTrigger.create({
      trigger: '.green',
      containerAnimation: scrollTween,
      start: 'center 65%',
      end: 'center 51%',
      onEnter: () => console.log('enter'),
      onLeave: () => console.log('leave'),
      onEnterBack: () => console.log('enterBack'),
      onLeaveBack: () => console.log('leaveBack'),
      onToggle: (self) => console.log('active', self.isActive),
      id: '4',
    });

    // only show the relevant section's markers at any given time
    gsap.set(
      '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end',
      { autoAlpha: 0 }
    );
    ['red', 'gray', 'purple', 'green'].forEach((triggerClass, i) => {
      ScrollTrigger.create({
        trigger: '.' + triggerClass,
        containerAnimation: scrollTween,
        start: 'left 30%',
        end: i === 3 ? 'right right' : 'right 30%',
        markers: false,
        onToggle: (self) =>
          gsap.to('.marker-' + (i + 1), {
            duration: 0.25,
            autoAlpha: self.isActive ? 1 : 0,
          }),
      });
    });

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollSmoother.getAll().forEach((smoother) => smoother.kill());
      if (scrollTween) scrollTween.kill();
      if (scrollTo) scrollTo.kill();
    };
  }, []);

  return (
    <div
      className='container'
      ref={containerRef}
    >
      <div className='panel red'>
        <pre className='prettyprint linenums'>
          <code>{`<div className="box box-1"></div>`}</code>
        </pre>
        <div className='box box-1'></div>
      </div>
      <div className='panel gray'>
        <pre className='prettyprint linenums'>
          <code>{`<div className="box box-2"></div>`}</code>
        </pre>
        <div className='box box-2'></div>
      </div>
      <div className='panel purple'>
        <pre className='prettyprint linenums'>
          <code>{`<div className="box box-3"></div>`}</code>
        </pre>
        <div className='box box-3'></div>
      </div>
      <div className='panel green'>
        <pre className='prettyprint linenums'>
          <code>{`<div className="box box-4 green"></div>`}</code>
        </pre>
        <div className='box box-4 green'></div>
      </div>
    </div>
  );
};

export default SmoothScrollComponent;
