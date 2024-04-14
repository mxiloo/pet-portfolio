'use client';

import styles from './content.module.scss';
import ElementBtn from "@/components/element-btn/element-btn";
import Projects from "@/components/projects/projects";
import {useState} from "react";
import Playlist from "@/components/playlist/playlist";
import Resume from "@/components/resume/resume";


import folderPic from '../../images/folder.png';
import infoMe from '../../images/info-me.png';
import playlist from '../../images/spotify.png';

//walls
import wallpaperRobotGit from '../../images/wall.gif';
import nightCityGit from '../../images/wall2.gif';
import eveningGit from '../../images/wall4.gif';
import tvGif from '../../images/tv2.gif';

export type TState = {
    projects: boolean,
    resume: boolean,
    playlist: boolean,
    [key: string]: boolean | undefined;
}

function Content() {

    const defaultState: string = '';
    const [currentWallpaper, setCurrentWallpaper] = useState(defaultState);

    const [activeContent, setActiveContent] = useState<TState>({
        projects: false,
        resume: false,
        playlist: false
    });

    const wallpaperRobot: string = wallpaperRobotGit.src;
    const nightCity: string = nightCityGit.src;
    const evening: string = eveningGit.src;
    const tv: string = tvGif.src;

    // console.log(activeContent)

    const changeToNextWallpaper = () => {
        setCurrentWallpaper(tv); // Установите текущую обоину на изображение с помехами
        setTimeout(() => {
            if (currentWallpaper === wallpaperRobot) {
                setCurrentWallpaper(nightCity);
            } else if (currentWallpaper === nightCity) {
                setCurrentWallpaper(evening);
            } else {
                setCurrentWallpaper(wallpaperRobot); // Вернуться к начальному состоянию
            }
        }, 400); // Задержка в 1 секунду
    };

    const changeToPreviousWallpaper = () => {
        setCurrentWallpaper(tv); // Установите текущую обоину на изображение с помехами
        setTimeout(() => {
            if (currentWallpaper === nightCity) {
                setCurrentWallpaper(wallpaperRobot);
            } else if (currentWallpaper === evening) {
                setCurrentWallpaper(nightCity);
            } else {
                setCurrentWallpaper(evening); // Вернуться к начальному состоянию
            }
        }, 400); // Задержка в 1 секунду
    };

    const onOpen = () => {
        setCurrentWallpaper(tv);
        setTimeout(() => {
            if (currentWallpaper === defaultState) {
                setCurrentWallpaper(wallpaperRobot)
            } else {
                setCurrentWallpaper(defaultState)
            }
        }, 400);
    };

    const handleClick = (content: string) => {
        setActiveContent(prevState => ({
            ...prevState,
            [content]: !prevState[content]
        }));
    };

    return (
        <section style={{backgroundImage: `url(${currentWallpaper})`}} className={styles.container}>

            <div className={styles.switches}>
                <button className={styles.arrowLeft} onClick={changeToPreviousWallpaper}
                        disabled={currentWallpaper === defaultState}></button>
                <button className={currentWallpaper === defaultState ? styles.btn : styles.btnOn}
                        onClick={onOpen}></button>
                <button className={styles.arrowRight} onClick={changeToNextWallpaper}
                        disabled={currentWallpaper === defaultState}></button>
            </div>

            <div className={styles.background}>
                <div className={styles.scanlines}></div>
            </div>

            {/*<div className={styles.dance}></div>*/}

            <div className={styles.content}>
                <ElementBtn
                    activeContent={activeContent}
                    url={folderPic.src} name={'Проекты'}
                    contentType={'projects'}
                    width={'93px'}
                    onClick={() => handleClick('projects')}>

                    <Projects/>

                </ElementBtn>
                <a className={styles.link} href='https://disk.yandex.ru/i/rImF2P45aR_LqQ' target='_blank'>
                    <ElementBtn
                        activeContent={activeContent}
                        url={infoMe.src} name={'Резюме'}
                        contentType={'resume'}
                        width={'75px'}
                        onClick={() => handleClick('')}>


                        <Resume/>


                    </ElementBtn>
                </a>
                <ElementBtn
                    activeContent={activeContent}
                    url={playlist.src}
                    name={'Плейлист'}
                    contentType={'playlist'}
                    width={'75px'}
                    onClick={() => handleClick('playlist')}>

                    <Playlist/>

                </ElementBtn>
            </div>
        </section>
    )
}

export default Content