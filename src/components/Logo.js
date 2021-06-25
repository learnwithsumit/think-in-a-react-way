import { useState } from 'react';
import styles from '../assets/css/Logo.module.css';

export default function Logo() {
    // eslint-disable-next-line no-unused-vars
    const [glassColor, setGlassColor] = useState('black');

    // pickColor randomly
    const pickColorRandomly = () => {
        const colors = ['red', 'green', 'yellow', 'blue', 'orange'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        return color;
    };
    return (
        <div className={styles.logo}>
            <div className={styles.hair}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.16 126.87">
                    <g>
                        <g>
                            <path d="M145.34,73.26v-38H132a93.15,93.15,0,0,0,1.5-12.63l-7.86,5.72c4.29-5,0-28.39,0-28.39s-5.72,11.23-41.46,8.37S43.42,19.81,43.42,19.81c-4.29-4.29,0-11.44,0-11.44-10,5.72-5,15-5,15H26.9l7.94,5a14.45,14.45,0,0,0-5.52,6.91H7.82v38L0,81.08l7.82,7.83,2.11,38h20.3L28.12,86.68a1,1,0,1,0-2,0V117.5H17V86.39l-5.3-5.31,5.3-5.3V44.66H27.12A45.64,45.64,0,0,0,27,51.74h7.15a16.76,16.76,0,0,1,5.72-11.2c12.15-15,63.62-6.25,63.62-6.25l5.72-8.42L107,34.29c12.13,3,13.21,17.18,13.21,17.18h5.38a23.52,23.52,0,0,0,3.8-6.81h6.74V75.78l5.31,5.3-5.31,5.31V117.5H125l2.11,9.37h20.3l-2.11-38,7.82-7.83Z" />
                        </g>
                    </g>
                </svg>
            </div>

            <div className={styles.glasses}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.63 42.68">
                    <g>
                        <g>
                            <rect
                                className={`${styles.coloredLine} border`}
                                x="30.08"
                                y="11.04"
                                width="2.54"
                                height="15.01"
                                rx="0.83"
                                transform="translate(-3.93 27.63) rotate(-45.04)"
                            />
                            <path
                                className={[styles.coloredLine, 'border'].join(' ')}
                                d="M33.69,17.68a.83.83,0,0,0,1.17,0l.62-.62a.82.82,0,0,0,0-1.17l-7.8-7.8a.83.83,0,0,0-1.17,0l-.62.62a.83.83,0,0,0,0,1.17Z"
                            />
                            <rect
                                className={[styles.coloredLine, 'border'].join(' ')}
                                x="83.39"
                                y="11.04"
                                width="2.53"
                                height="15.01"
                                rx="0.83"
                                transform="translate(11.72 65.35) rotate(-45.04)"
                            />
                            <rect
                                className={[styles.coloredLine, 'border'].join(' ')}
                                x="82.73"
                                y="6.54"
                                width="2.53"
                                height="12.68"
                                rx="0.83"
                                transform="translate(15.45 63.11) rotate(-44.95)"
                            />
                            <path
                                style={{ fill: glassColor }}
                                d="M102,18.8H99.65a21.34,21.34,0,0,0-42.31-.5c-1.16.25-5.65.5-5.65.5s-4.23-.22-5.4-.45A21.34,21.34,0,0,0,4,18.8H1.65A1.65,1.65,0,0,0,0,20.45v1.79a1.65,1.65,0,0,0,1.65,1.65H4a21.34,21.34,0,0,0,42.32.47c1.19-.24,5.4-.47,5.4-.47s4.47.26,5.66.52a21.34,21.34,0,0,0,42.3-.52H102a1.65,1.65,0,0,0,1.65-1.65V20.45A1.65,1.65,0,0,0,102,18.8ZM25.16,37.6A16.26,16.26,0,1,1,41.42,21.34,16.26,16.26,0,0,1,25.16,37.6Zm53.31,0A16.26,16.26,0,1,1,94.72,21.34,16.26,16.26,0,0,1,78.47,37.6Z"
                            />
                        </g>
                    </g>
                </svg>
            </div>

            <div className={styles.play}>
                <button type="button" onClick={() => setGlassColor(pickColorRandomly())}>
                    Colorize Glass
                </button>
                <button type="button" onClick={() => setGlassColor('black')}>
                    Reset Glass
                </button>
            </div>
        </div>
    );
}
