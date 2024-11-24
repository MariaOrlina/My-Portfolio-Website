'use client';

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import SkillSection from '../components/skills';
import ExperienceSection from '../components/Experience';
import MyActivities from '../components/tabs';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let scrollInstance;

    const loadScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      // Initialize LocomotiveScroll
      scrollInstance = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
      }, 2000);
    };

    loadScroll();

    return () => {
      if (scrollInstance) scrollInstance.destroy(); // Clean up LocomotiveScroll
    };
  }, []);

  return (
    <main className={styles.main} data-scroll-container>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <MyActivities />
      <ExperienceSection />
      <SkillSection />
      <SlidingImages />
      <Contact />
    </main>
  );
}
