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
    description: "At Bank of America, I design and build distributed backend services in Java and Spring Boot running on OpenShift/Kubernetes, with a focus on resilience and reliability. I led development of a service vault engine with a full secrets lifecycle using OAuth2/OIDC, throttling, and circuit breakers, improving median latency and keeping availability near 99.95–99.97% while reducing production incidents and change-failure rate. I optimize data access across MongoDB, IBM DB2, Oracle, and a graph database, and deliver React/Angular admin UIs with RBAC and strong auditability to streamline operational workflows. I also invest heavily in quality and operations, using JUnit/Mockito/Testcontainers, Jenkins, and GitHub Actions plus Python-based data-quality/config-drift checks and an on-call assistant that auto-summarizes incidents and suggests runbook steps, cutting both pipeline noise and triage time.",
  },
  {
    role: "Software Engineer",
    company: "Walmart",
    duration: "June 2024 - April 2025",
    description: "At Walmart, I worked on high-traffic Java/Spring Boot microservices for order orchestration and real-time inventory on Kubernetes (OpenShift), handling around 1.8K requests per second while significantly reducing checkout latency and order failures through better caching and database patterns. I built and documented REST and GraphQL APIs (Swagger/OpenAPI, Postman, Pact) that improved integration success and sped up partner onboarding, and implemented OAuth2/OIDC, RBAC, rate limiting, and audit logging to harden security across store and e-commerce tools. On the frontend side, I developed React and Angular dashboards that replaced manual spreadsheets and helped store associates manage inventory exceptions and curbside pickup more efficiently. I also prototyped an LLM-powered, guardrailed assistant using LangChain and retrieval over de-identified policies and playbooks, improving first-contact resolution in UAT while keeping latency under a second.",
  },
  {
    role: "Software Engineer",
    company: "Optum",
    duration: "May 2020 - April 2022",
    description: "At Optum, I modernized a distributed claims and eligibility microservice built with Java and Spring Boot by refactoring FHIR R4 resource handling, introducing idempotent POST endpoints, and standardizing error models, which reduced defect-driven tickets. I designed a claims file processing pipeline that transforms industry EDI files into internal JSON events with parallel processing and batched DB writes, cutting ingestion times dramatically and boosting peak throughput. I implemented Angular/TypeScript portal features for real-time eligibility checks and claim status, improving time to interactive and reducing user form errors. Across MongoDB and Oracle, I tuned performance with composite indexes, pagination, and projections to bring query times down while sustaining hundreds of HIPAA-compliant requests per second.",
  },
];

const education = [
  {
    role: "Master of Science in Computer Science",
    institution: "Illinois Institute of Technology",
    description: "Focussed Cloud Computing, Artificial Intelligence, Informaiton Security and Software Development. Graduated with a GPA of 3.8.",
  },
  {
    role: "Bachelor of Technology in Information Technology",
    institution: "Andhra University",
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
