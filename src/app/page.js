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
    const loadScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    };

    loadScroll();
  }, []);

  return (
    <main className={styles.main}>
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
