import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideInFromLeft, slideInFromRight } from './animation';
import Image from 'next/image';

export default function About() {
    const phrase = `Hey there! I’m Maria Orlina, a tech enthusiast driven by innovation and creativity. My journey began with a spark of curiosity that grew into a passion for building, learning, and problem-solving. With a background in computer science and experience in software engineering and solution architecture, I’ve developed expertise in programming, cloud computing, and system design. I love tackling challenges, whether it’s creating seamless user experiences, optimizing performance, or designing scalable systems. Beyond coding, I’m committed to continuous learning and staying at the forefront of technology. Outside of tech, I enjoy collaborating, brainstorming new ideas, and mentoring others. I believe true innovation blends knowledge, passion, and a touch of fun.`;

    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <h2 className={styles.title}>ABOUT ME</h2>
            <div className={styles.body}>
                <motion.div
                    className={styles.textContent}
                    variants={slideInFromLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Render the entire phrase directly */}
                    <p>{phrase}</p>
                </motion.div>
                <motion.div
                    className={styles.imageGrid}
                    variants={slideInFromRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className={styles.imageWrapper}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/images/IMG_3041.jpeg"
                            alt="About Image"
                            className={styles.aboutImage}
                            width={400}
                            height={300}
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
