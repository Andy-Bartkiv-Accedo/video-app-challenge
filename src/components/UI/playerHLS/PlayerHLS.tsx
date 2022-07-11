import { useRef, useEffect } from 'react';
import Hls from 'hls.js';
import cls from './PlayerHLS.module.css'

interface Props {
    url: string
};

const PlayerHLS: React.FC<Props> = ({ url }) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const hls = new Hls();
    hls.loadSource(url);

    useEffect(() => {
        if (videoRef.current) hls.attachMedia(videoRef.current);        
    }, [])

    return (
        <div className={ cls.container }>
            <video autoPlay controls
                className={ cls.video }
                ref={ videoRef }
            >
            </video>
        </div>
    )
};

export default PlayerHLS;