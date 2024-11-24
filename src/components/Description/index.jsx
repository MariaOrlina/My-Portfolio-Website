import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideInFromLeft, slideInFromRight } from './animation';
import Image from 'next/image';

export default function About() {
    const phrase = `Hey there! I’m Maria Orlina, a tech enthusiast who thrives on exploring the crossroads of creativity and technology. Whether it’s building scalable systems, creating seamless user experiences, or diving into cloud computing, I embrace challenges that push the boundaries of innovation. I’m passionate about crafting seamless systems, optimizing performance, and building for the future. Let’s make ideas come alive!`;
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
