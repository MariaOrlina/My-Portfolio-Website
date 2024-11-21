import styles from './style.module.scss';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function ContactSection() {
    const container = useRef(null);
    const [showIcons, setShowIcons] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

    const handleGetInTouch = () => {
        setShowIcons(!showIcons);
    };

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <h2 className={styles.headline}>Let's Innovate Together</h2>
            <div className={styles.splineWrapper}>
                <Spline scene="https://prod.spline.design/at7sb7CuV13XBhrb/scene.splinecode" />
            </div>
            <div className={styles.watermarkCover}></div>
            <div className={styles.body}>
                {/* Button Container */}
                <motion.div className={styles.buttonContainer}>
                    <div
                        className={styles.getInTouchButton}
                        onClick={handleGetInTouch}
                    >
                        <p>Get in touch</p>
                    </div>
                    {showIcons && (
                        <div className={styles.socialIcons}>
                            <a href="https://www.linkedin.com/in/maria-orlina4/" target="_blank" rel="noopener noreferrer">
                                <FiLinkedin />
                            </a>
                            <a href="mailto:mariaorlina9901@gmail.com">
                                <FiMail />
                            </a>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}
