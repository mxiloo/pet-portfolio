import styles from './playlist.module.scss';
import {useState} from "react";
import Typewriter from 'typewriter-effect';
// Music


type TMusicDetails = {
    songName: string;
    artist: string;
    song: string;
}

function Playlist() {

    // const [musicDetails, setMusicDetails] = useState<TMusicDetails>({
    //     songName: 'Lifelike',
    //     artist: 'Porter Robinson',
    //     song: ''
    // });
    //
    // const [musicProgressBar, setMusicProgressBar] = useState<number>(50)
    //
    // const handleAudioProgress = (e) => {
    //     setMusicProgressBar(e.target.value)
    // }

    return (
        <section className={styles.styles}>
            <audio>
                <source src='../../radio/Porter_Robinson_-_Lifelike_73501082.mp3' type='audio/mp3'/>
            </audio>
            <div className={styles.overlay}>
                <div className={styles.musicBox}>
                    <div className={styles.details}>
                        <Typewriter
                            options={{
                                strings: ['Страница в разработке...'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    {/*<div className={styles.song}>
                        <span className={styles.details}>{musicDetails.artist}</span>
                        <span className={styles.details}>—</span>
                        <span className={styles.details}>{musicDetails.songName}</span>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.prevBtn}></div>
                        <div className={styles.playBtn}></div>
                        <div className={styles.nextBtn}></div>
                    </div>
                    <div className={styles.range}>
                        <span className={styles.details}>00:00</span>
                        <input type='range' name='progressBar' className={styles.progressBar} value={musicProgressBar}
                               onChange={handleAudioProgress}/>
                        <span className={styles.details}>04:00</span>
                    </div>*/}
                </div>

            </div>
            <div className={styles.back}>
            </div>
        </section>
    )
}

export default Playlist