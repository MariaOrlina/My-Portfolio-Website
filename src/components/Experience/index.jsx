'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Engineer",
    company: "Bright Minds Enrichment",
    duration: "Dec 2023 - Present",
    description: "Led the development and integration of cross-application features, enhancing user experience and system performance.",
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Illinois Institute of Technology",
    duration: "August 2023 - May 2024",
    description: "Provided guidance on assignments, developed instructional material for GCP operations, and offered system troubleshooting support.",
  },
  {
    role: "Software Engineer",
    company: "Technocolabs",
    duration: "May 2020 - April 2022",
    description: "Built data pipelines, predictive models, and data visualizations for improving data-driven decision-making processes.",
  },
  {
    role: "Product Engineer Intern",
    company: "Upkey",
    duration: "August 2020 - November 2020",
    description: "Participated in product development, feature enhancements, and code review processes, contributing to agile team efforts.",
  },
];

const education = [
  {
    role: "Master of Science in Computer Science",
    institution: "Illinois Institute of Technology",
    duration: "August 2022 - May 2024",
    description: "Focussed Cloud Computing, Artificial Intelligence, Informaiton Security and Software Development. Graduated with a GPA of 3.8.",
  },
  {
    role: "Bachelor of Technology in Information Technology",
    institution: "Andhra University",
    duration: "August 2018 - May 2022",
    description: "Focused on Computer Networks, Data Structures, and Database Management Systems. Graduated with a GPA of 3.4.",
  },
];

// ExperienceItem Component
const ExperienceItem = ({ role, company, duration, description }) => (
  <div className={styles.experienceItem}>
    <div className={styles.timelineMarker}></div>
    <div className={styles.timelineContent}>
      <h2>{role}</h2>
      <h3>{company}</h3>
      <p className={styles.duration}>{duration}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('Experience');
  const timelineContainer = useRef(null);

  useEffect(() => {
    // GSAP animation for timeline appearance
    gsap.fromTo(
      timelineContainer.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineContainer.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP animation for experience items
    const items = activeTab === 'Experience' ? experiences : education;
    items.forEach((_, i) => {
      gsap.fromTo(
        `.timelineItem_${i}`,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.timelineItem_${i}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [activeTab]);

  const tabs = [
    { name: 'Experience' },
    { name: 'Education' },
  ];

  const itemsToRender = activeTab === 'Experience' ? experiences : education;

  return (
    <div className={styles.experienceEducationSection}>
      <h2 className={styles.sectionTitle}>MY JOURNEY SO FAR</h2>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`${styles.tab} ${activeTab === tab.name ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      <motion.div ref={timelineContainer} className={styles.timeline}>
        {itemsToRender.map((item, index) => (
          <motion.div key={index} className={`${styles.timelineItemWrapper} timelineItem_${index}`}>
            <ExperienceItem
              role={item.role}
              company={item.company || item.institution}
              duration={item.duration}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
