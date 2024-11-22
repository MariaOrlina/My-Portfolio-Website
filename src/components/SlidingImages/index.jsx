'use client';
import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'; // Right arrow icon

const projects = [
    {
        title: "SocialMediaPlatform",
        src: "socialmediaplatform.jpg",
        description: "A social media platform to enable users to interact and share content.",
        tools: "JavaScript, Node.js, MongoDB",
        github: "https://github.com/MariaOrlina/SocialMediaPlatform"
    },
    {
        title: "InventoryManagementSystem",
        src: "inventory-managment.jpg",
        description: "Cloud-based system to manage inventory, purchase orders, and point-of-sale processes.",
        tools: "Java, Spring Boot, Hibernate, Azure",
        github: "https://github.com/MariaOrlina/InventoryManagementSystem"
    },
    {
        title: "Geospatial-Crime-Mapping-and-Analysis-Platform",
        src: "Geospatial.jpg",
        description: "Platform for mapping and analyzing crime data using geospatial analysis.",
        tools: "Python, Jupyter Notebook, GIS Tools",
        github: "https://github.com/MariaOrlina/Geospatial-Crime-Mapping-and-Analysis-Platform"
    },
    {
        title: "Blogging-Platform",
        src: "Bloggin-platform.jpg",
        description: "A blogging platform allowing users to create, edit, and share posts.",
        tools: "JavaScript, Express.js, MongoDB",
        github: "https://github.com/MariaOrlina/Blogging-Platform"
    },
    {
        title: "University-Blogging-Platform",
        src: "University-bloggin-platform.jpg",
        description: "Platform to streamline communication within a university, promoting knowledge sharing.",
        tools: "JavaScript, React, Node.js",
        github: "https://github.com/MariaOrlina/University-Blogging-Platform"
    },
    {
        title: "Database-Management",
        src: "database-management.jpg",
        description: "A project for learning and implementing database management systems.",
        tools: "MySQL, PostgreSQL",
        github: "https://github.com/MariaOrlina/Database-Management"
    },
    {
        title: "Music Therapy Treatment Based on Emotion Detection",
        src: "music-thereapy.jpg",
        description: "This project proposes a system that detects a person's mood through facial emotion recognition using convolutional neural networks and generates a music playlist based on the detected mood. Unlike humans, machines find detecting facial expressions to be a challenging task. ",
        tools: "MySQL, PostgreSQL",
        github: "https://github.com/MariaOrlina/MusicTherapyTreatment_EmotionDetection"
    },
    {
        title: "FitCheck-AI-Powered-Fitness-and-Dining-Recommendations",
        src: "c2.png",
        description: "AI-powered app that provides personalized fitness and dining recommendations.",
        tools: "JavaScript, Python, TensorFlow, React",
        github: "https://github.com/yourusername/FitCheck-AI-Powered-Fitness-and-Dining-Recommendations"
    },
    {
        title: "Real-Time-Sentiment-Analysis-and-Topic-Modeling-Platform",
        src: "real time sentimental analysis.jpg",
        description: "Platform for real-time sentiment analysis and topic modeling.",
        tools: "Python, NLTK, SpaCy, Flask",
        github: "https://github.com/MariaOrlina/Real-Time-Sentiment-Analysis-and-Topic-Modeling-Platform"
    },
    {
        title: "Automated-Image-Captioning-with-Attention-Mechanism",
        src: "automated-image-caption.jpg",
        description: "System to generate automatic captions for images using attention mechanism.",
        tools: "Python, PyTorch, Jupyter Notebook",
        github: "https://github.com/MariaOrlina/Automated-Image-Captioning-with-Attention-Mechanism"
    },
    {
        title: "Predictive-Maintenance-System-for-Industrial-Equipment",
        src: "predictive-maintenance.jpg",
        description: "Predictive maintenance system for analyzing the condition of industrial equipment.",
        tools: "Python, Scikit-Learn, Jupyter Notebook",
        github: "https://github.com/MariaOrlina/Predictive-Maintenance-System-for-Industrial-Equipment"
    },
    {
        title: "AI-Powered-Customer-Support-Chatbot-with-Real-Time-Feedback",
        src: "ai-powered-customer-support.jpg",
        description: "An AI-powered chatbot providing real-time feedback for customer support.",
        tools: "TypeScript, Node.js, Express.js",
        github: "https://github.com/MariaOrlina/-AI-Powered-Customer-Support-Chatbot-with-Real-Time-Feedback-"
    },
    {
        title: "IOT_HealthMonitor",
        src: "IOT-Monitor.jpg",
        description: "An IoT-based health monitoring system to collect patient vitals in real time.",
        tools: "C++, Arduino, IoT Sensors",
        github: "https://github.com/MariaOrlina/IOT_HealthMonitor"
    },
    {
        title: "PolarIceCaps",
        src: "Polaricecaps.jpg",
        description: "Analysis of polar ice caps using datasets to understand the environmental impact.",
        tools: "Python, Pandas, Matplotlib",
        github: "https://github.com/MariaOrlina/PolarIceCaps"
    },
    
];

export default function SlidingImages() {
    const container = useRef(null);
    const sliderRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });   

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    const handleScrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };
    

    return (
        <div ref={container} className={styles.slidingImages}>
            <div className={styles.title}>
            <h2 className={styles.title}>PROJECTS SLIDESHOW</h2>
            </div>
            <motion.div ref={sliderRef} style={{ x: x1 }} className={styles.slider}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.project}
                        style={{ backgroundColor: project.color }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className={styles.imageContainer}>
                            <Image fill={true} alt={project.title} src={`/images/${project.src}`} />
                            <div className={styles.projectTitle}>{project.title}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            {/* Left arrow button for scrolling */}
            <button className={styles.scrollButtonLeft} onClick={handleScrollLeft}>
                <FiArrowLeft />
            </button>
            {/* Right arrow button for scrolling */}
            <button className={styles.scrollButton} onClick={handleScrollRight}>
                <FiArrowRight />
            </button>

            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>

            {selectedProject && (
                <div className={styles.modal} onClick={() => setSelectedProject(null)}>
                    <div className={styles.modalContent}>
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        <p><strong>Tools Used:</strong> {selectedProject.tools}</p>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                </div>
            )}
        </div>
    );
}