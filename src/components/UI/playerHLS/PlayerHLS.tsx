import { useRef, useEffect } from 'react';
import Hls from 'hls.js';
import cls from './PlayerHLS.module.css'

interface Props {
    url: string
};

const PlayerHLS: React.FC<Props> = ({ url }) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    // Bound HLS and Video
    const hls = new Hls();
    useEffect(() => {
        if (videoRef.current) {
            hls.attachMedia(videoRef.current);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                console.log('video and hls.js are now bound together !');
                hls.loadSource(url);
                hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                    console.log('manifest loaded, found ' + data.levels.length + ' quality level');
                });
            });
        } 
    }, []);

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