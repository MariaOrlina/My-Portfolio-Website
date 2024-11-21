import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity, slideInFromLeft, slideInFromRight } from './animation';
import Rounded from '../../common/RoundedButton';

export default function About() {
    const phrase  = `
    Hey there! I’m Maria Orlina, a tech enthusiast driven by innovation and creativity. My journey began with a spark of curiosity that grew into a passion for building, learning, and problem-solving. With a background in computer science and experience in software engineering and solution architecture, I’ve developed expertise in programming, cloud computing, and system design. I love tackling challenges, whether it’s creating seamless user experiences, optimizing performance, or designing scalable systems. Beyond coding, I’m committed to continuous learning and staying at the forefront of technology. Outside of tech, I enjoy collaborating, brainstorming new ideas, and mentoring others. I believe true innovation blends knowledge, passion, and a touch of fun.
    `;
    
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <motion.div
                    className={styles.textContent}
                    variants={slideInFromLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <p>
                        {phrase.split(" ").map((word, index) => (
                            <span key={index} className={styles.mask}>
                                <motion.span
                                    variants={slideUp}
                                    custom={index}
                                    animate={isInView ? "open" : "closed"}
                                    key={index}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </p>
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                        Ready to push boundaries, turn challenges into opportunities, and build a future where technology drives real impact.
                    </motion.p>
                </motion.div>
                <motion.div
                    className={styles.imageGrid}
                    variants={slideInFromRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className={styles.imageWrapper}
                        whileHover={{ scale: 0.95 }}  // Zoom out effect when hovered
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="https://raw.githubusercontent.com/MariaOrlina/portfolio-image/refs/heads/main/IMG_3041.jpeg"
                            alt="About Image"
                            className={styles.aboutImage}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
