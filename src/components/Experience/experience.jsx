'use client';
import React from 'react';
import styles from './style.module.scss';

export default function ExperienceItem({ role, company, duration, description }) {
  return (
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
}
