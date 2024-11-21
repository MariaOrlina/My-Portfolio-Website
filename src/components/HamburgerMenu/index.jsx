'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { FiLinkedin, FiMail, FiGithub, FiFileText } from 'react-icons/fi';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger Button */}
            <div className={styles.hamburgerMenuButton} onClick={toggleMenu}>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    ☰
                </motion.button>
            </div>

            {/* Slide-in Menu */}
            <motion.div
                className={`${styles.hamburgerMenu} ${isOpen ? styles.open : ''}`}
                initial={{ x: '-100%' }}
                animate={{ x: isOpen ? 0 : '-100%' }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                {/* Menu Links */}
                <ul className={styles.menuItems}>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#what-im-up-to">What I'm Up To</a></li>
                    <li><a href="#experience-education">Experience / Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Social Icons */}
                <div className={styles.socialIcons}>
                    <a href="https://www.linkedin.com/in/maria-orlina4/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FiLinkedin size={30} />
                    </a>
                    <a href="mailto:mariaorlina9901@gmail.com" title="Email">
                        <FiMail size={30} />
                    </a>
                    <a href="https://github.com/MariaOrlina" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FiGithub size={30} />
                    </a>
                    <a href="https://medium.com/@mariaorlina" target="_blank" rel="noopener noreferrer" title="Medium Articles">
                        <FiFileText size={30} />
                    </a>
                </div>
            </motion.div>
        </>
    );
}
