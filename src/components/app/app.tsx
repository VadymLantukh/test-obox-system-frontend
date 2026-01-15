import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Hero } from '../hero/hero.tsx';
import Story from '../story/story.tsx';

import { useContent } from '../../hooks/use-content.ts';
import styles from './styles.module.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { content } = useContent();
  const videoRef = useRef<HTMLVideoElement>(null);
  const baseUrl = import.meta.env.BASE_URL;
  const videoPath = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}bg-video.mp4`;

  useGSAP(() => {
    gsap.fromTo(
      videoRef.current,
      {
        filter: 'brightness(1) blur(0px)',
      },
      {
        filter: 'brightness(0.5) blur(3px)',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=100%',
          scrub: true,
        },
      }
    );
  });

  return (
    <main>
      <div className={styles.fixedVideo}>
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          src={videoPath}
        />
        <div className={styles.overlay} />
      </div>

      <Hero title={content?.hero.heading} subtitle={content?.hero.subheading} />

      {content?.slides.map((slide, index) => (
        <Story key={slide.id} data={slide} index={index} />
      ))}
    </main>
  );
};

export default App;
