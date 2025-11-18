'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Developer",
    company: "Bank of America",
    duration: "May 2025 - Present",
    description: "I design and operate cloud-native, distributed Java/Spring Boot services on Kubernetes/OpenShift that power secure secrets and vault management for internal platforms. My work spans high-reliability REST APIs, OAuth2/OIDC security, data performance tuning across MongoDB/DB2/Oracle/Graph DB, and front-end admin tools in React/Angular, with measurable improvements in latency, stability, and operational efficiency.",
  },
  {
    role: "Software Engineer",
    company: "Walmart",
    duration: "June 2024 - April 2025",
    description: "I worked on large-scale order orchestration and real-time inventory systems using Java/Spring Boot microservices on Kubernetes/OpenShift, focusing on checkout performance, reliability, and clean API contracts (REST and GraphQL) for internal and partner teams. I also built React/Angular dashboards for store associates and prototyped an LLM-assisted support tool, reducing manual workflows and improving resolution times for store and e-commerce operations.",
  },
  {
    role: "Software Engineer",
    company: "Optum",
    duration: "May 2020 - April 2022",
    description: "I contributed to healthcare platforms by building and optimizing Java/Spring Boot services around claims and eligibility, including FHIR-based APIs and high-throughput EDI processing pipelines. I collaborated across teams to ship Angular/TypeScript portals, tune MongoDB and Oracle performance, and ensure HIPAA-compliant, reliable systems that handle sensitive healthcare data at scale.",
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
