'use client';
import styles from './element-btn.module.scss'
import {TState} from "@/components/content/content";
import React, {useEffect} from "react";

type TProps = {
    url: string,
    width: string,
    name: string,
    children: React.ReactNode,
    onClick: () => void,
    activeContent: TState,
    contentType: string
}

function ElementBtn({url, width, name, children, onClick, activeContent, contentType}: TProps) {

    useEffect(() => {
        function closeEsc(e: KeyboardEvent) {
            if (e.key === 'Escape' && activeContent[contentType]) {
                onClick();
            }
        }

        document.addEventListener('keydown', closeEsc);
        return () => document.removeEventListener('keydown', closeEsc);
    }, [activeContent, contentType, onClick]);

    const toggle = activeContent[contentType] ? `${styles.active}` : `${styles.scale}`
    const toggleOverlay = activeContent[contentType] ? `${styles.overlayActive}` : `${styles.overlay}`

    return (
        <section className={styles.section}>
            <div className={toggleOverlay}></div>
            <button className={styles.button} onClick={onClick}>
                <div style={{backgroundImage: `url(${url})`, width: `${width}`}} className={styles.image}></div>
                <span className={styles.name}>{name}</span>
            </button>
            <div className={toggle}>
                <div className={styles.top}>
                    <div className={styles.dots}></div>
                    <span className={styles.nameTop}>{name}</span>
                    <div className={styles.dots}></div>
                    <button className={styles.close} onClick={onClick}></button>
                </div>

                {children}

            </div>
        </section>
    )
}

export default ElementBtn