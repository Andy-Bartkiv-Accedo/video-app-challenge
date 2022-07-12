import { useRef, useEffect } from 'react';
import Hls from 'hls.js';
import cls from './PlayerHLS.module.css'

interface Props {
    url: string
};

const PlayerHLS: React.FC<Props> = ({ url }) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const hls = new Hls();
    // hls.loadSource(url);

    useEffect(() => {
        if (videoRef.current) {
            hls.attachMedia(videoRef.current);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                console.log('video and hls.js are now bound together !');
                hls.loadSource(url);
                hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                console.log('manifest loaded, found ' + data.levels.length + ' quality level');
                console.log(videoRef.current?.duration)
                });
            });
        } 
    }, []);

    // const []

    const togglePlay = (video:HTMLVideoElement | null) => {
        if (video) {
            console.log(video.duration)
            console.log(video.currentTime)

            if (video.onplaying) video.pause()
            else video.play()
        }
    }

    function toggleFullScreen(vid:HTMLVideoElement | null){
        if(vid && vid.requestFullscreen){
            vid.requestFullscreen();
        }
    }

    return (
        <div className={ cls.container }>
            <video autoPlay controls
                className={ cls.video }
                ref={ videoRef }
            >
            </video>

            <div className={ cls.controls }>
                <div className={ cls.btn } onClick={() => { togglePlay(videoRef.current) }}>{(videoRef.current?.onplaying) ? 'Stop' : 'Play'}</div>
                <div className={ cls.btn } onClick={() => {if (videoRef.current) videoRef.current.pause()}}>Stop</div>
                <div className={ cls.btn } onClick={() => { toggleFullScreen(videoRef.current) }}>{'[ ]'}</div>
            </div>
        </div>
    )
};

export default PlayerHLS;