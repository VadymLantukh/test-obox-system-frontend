import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import type { ISlideContent } from '../../types/types.ts';
import styles from './styles.module.css';

interface IPropsType {
  data: ISlideContent;
  index: number;
}

const Story = ({ data, index }: IPropsType) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useGSAP(
    () => {
      const xOffset = isEven ? -100 : 100;

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, x: xOffset },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div
      className={`${styles.storyWrapper} ${isEven ? styles.left : styles.right}`}
      ref={sectionRef}
    >
      <div className={styles.contentWrapper}>
        <span className={styles.chapter}>{data.subtitle}</span>
        <h3 className={styles.heading}>{data.title}</h3>
        <p className={styles.text}>{data.description}</p>
        <div className={styles.line} />
      </div>
    </div>
  );
};

export default Story;
