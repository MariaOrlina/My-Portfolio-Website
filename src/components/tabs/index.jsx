import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { FiGithub, FiCloud, FiBookOpen, FiCode } from 'react-icons/fi';

export default function MyActivities() {
  const [activeTab, setActiveTab] = useState('Open Source Contributions');

  const tabs = [
    { name: 'Recent Articles', icon: <FiBookOpen /> },
    { name: 'Coding Challenges', icon: <FiCode /> },
    { name: 'Open Source Contributions', icon: <FiGithub /> },
    { name: 'Cloud Projects', icon: <FiCloud /> },
    { name: 'Certifications', icon: <FiBookOpen /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Recent Articles':
        return (
          <div className={styles.cards}>
            <motion.div className={styles.card}>
              <FiBookOpen size={40} color='black'/>
              <h3>Seamless Data Resilience on AWS: Efficient Cross-Region Replication and Disaster Recovery</h3>
              <p></p>
              <a href="https://medium.com/@mariaorlina9901" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </motion.div>
          </div>
        );
        case 'Coding Challenges Journey':
        return (
          <div className={styles.cards}>
            <motion.div className={styles.card}>
              <FiCode size={40} color='black' />
              <h3>LeetCode Challenges</h3>
              <p></p>
              <a href="https://leetcode.com/u/Maria_Orlina9901/" target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </motion.div>
          </div>
        );
      case 'Open Source Contributions':
        return (
          <div className={styles.cards}>
            <motion.div className={styles.card}>
              <FiGithub size={40} color='black'/>
              <h3>GitHub Contributions</h3>
              <p>Contributed to several open-source projects, including React libraries and AWS tooling.</p>
              <a href="https://github.com/MariaOrlina" target="_blank" rel="noopener noreferrer">
                View Contributions
              </a>
            </motion.div>
          </div>
        );
      case 'Cloud Projects':
        return (
          <div className={styles.cards}>
            <motion.div className={styles.card}>
              <FiCloud size={40} color='black'/>
              <h3>Project: AWS Lambda Automation</h3>
              <p>Built a serverless cloud function to automate data processing tasks.</p>
              <a href="https://github.com/MariaOrlina/Cloud-Portfolio" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          </div>
        );
        case 'Certifications':
        return (
          <div className={styles.cards}>
            <motion.div className={styles.card}>
              <FiBookOpen size={40} color='black'/>
              <h3>Certified in AWS, Azure, GCP &amp; Terraform</h3>
              <p>Below are the certifications I have achieved along with links to verify them:</p>
              <ul className={styles.certificationList}>
                <li>
                  <a href="https://www.credly.com/badges/7740d441-5816-497d-ac29-bb7a44ba8aab/public_url" target="_blank" rel="noopener noreferrer">
                    AWS Solutions Architect Associate
                  </a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/0960d5ea-5242-413d-9dda-e6c523ec6f67/public_url" target="_blank" rel="noopener noreferrer">
                    AWS Cloud Practitioner
                  </a>
                </li>
                <li>
                  <a href="https://learn.microsoft.com/api/credentials/share/en-us/MariaOrlina-5993/D0C7A50156E3DBEB?sharingId=AF6B69B28E136E31" target="_blank" rel="noopener noreferrer">
                    Azure AZ-900
                  </a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/e82da2c1-d9fb-460a-9fdb-ef846a7936d9/public_url" target="_blank" rel="noopener noreferrer">
                    GCP Certified Digital Leader
                  </a>
                </li>
                <li>
                  <p>
                  Terraform Associate (in progress)
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.myActivities}>
      <h2 className={styles.sectionTitle}>WHAT I&apos;M UP TO</h2>
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`${styles.tab} ${activeTab === tab.name ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
      <motion.div
        className={styles.tabContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderContent()}
      </motion.div>
    </div>
  );
}
