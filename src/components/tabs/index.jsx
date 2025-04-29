import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { FiGithub, FiCloud, FiBookOpen, FiCode } from 'react-icons/fi';

export default function MyActivities() {
  const [activeTab, setActiveTab] = useState('Certifications');

  const tabs = [
    { name: 'Certifications', icon: <FiBookOpen /> },
    { name: 'Recent Articles', icon: <FiBookOpen /> },
    { name: 'Coding Challenges', icon: <FiCode /> },
    { name: 'Open Source Contributions', icon: <FiGithub /> },
    { name: 'Paper Published', icon: <FiFileText /> },
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
        case 'Coding Challenges':
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
      case 'Paper Published':
        return (
          <div className={styles.cards}>
            <motion.div className={styles.card}>
              <FiFileText size={40} color='black'/>
              <h3>Research Papers Published</h3>
              <p>Authored and published peer-reviewed research papers on Agile Data Science practices and the application of emerging technologies like IoT, Machine Learning, and Psychoinformatics in healthcare. These works explore innovative methodologies to enhance software development processes and healthcare services through technology-driven solutions.</p>
              <a href="https://drive.google.com/drive/folders/1hBA8liG2mmGmqqHIsXLVm9iQMYtCRQzy" rel="noopener noreferrer">
                View Papers
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
