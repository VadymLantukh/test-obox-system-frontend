import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import styles from './styles.module.css';

interface IPropsType {
  title: string | undefined;
  subtitle: string | undefined;
}

export const Hero = ({ title, subtitle }: IPropsType) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(textRef.current, {
        y: -150,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className={styles.hero} ref={containerRef}>
      <div ref={textRef}>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
};
