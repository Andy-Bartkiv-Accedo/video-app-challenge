import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hls from 'hls.js';
import cls from './PlayerHLS.module.css';
import { BsPlayFill, BsPauseFill, BsFullscreen, BsFullscreenExit, BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";
import { MdArrowBack, MdFastRewind, MdFastForward } from "react-icons/md";

const convertTime = (time:number):string =>
    new Date(1000 * time).toISOString().substr(14, 5) 

interface Props {
    url: string
};

interface PlayerState {
    isPlaying: boolean,
    isMuted: boolean,
    currentTime: string,
    duration: string
    // progress: number,ß
}

const PlayerHLS: React.FC<Props> = ({ url }) => {

    const navigate = useNavigate();

    const [playerState, setPlayerState] = useState<PlayerState>({
        isPlaying: false,
        isMuted: false,
        currentTime: '00:00',
        duration: '00:00',
        // progress: 0,ß
        // speed: 1,
    })

    const videoRef = useRef<HTMLVideoElement>(null);
    const hls = new Hls();

    // Bound HLS and Video
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
            // setPlayerState({
            //     ...playerState,
            //     duration: convertTime(videoRef.current.duration)
            // });
        } 
    }, []);

    const togglePlay = () => {
        if (videoRef.current)
            videoRef.current.paused
                ? videoRef.current.play()
                : videoRef.current.pause();
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted
                ? videoRef.current.muted = false
                : videoRef.current.muted = true;
            setPlayerState({
                ...playerState,
                isMuted: !playerState.isMuted,
            });
        }
    };
    // Rewind or Fast Forward Current Time by 10s
    const seekingTime = (dTime:number = 10) => {
        if (videoRef.current)
            videoRef.current.currentTime += dTime;
    }
    // Update Time Current/Total 
    const handleTimeUpdate = () => {
        if (videoRef.current)
            setPlayerState({
                ...playerState,
                // progress: (videoRef.current.currentTime / videoRef.current.duration) * 100;
                currentTime: convertTime(videoRef.current.currentTime),
                duration: convertTime(videoRef.current.duration)
            });
    }

    const toggleFullScreen = (vid:HTMLVideoElement | null) => {
        if (vid && vid.requestFullscreen)
            vid.requestFullscreen();
    }

    return (
        <div className={ cls.container }>
            <div className={ cls.video_wrap}>
                {/* VIDEO Element */}
                <video 
                    // controls
                    className={ cls.video }
                    ref={ videoRef }
                    onTimeUpdate={ handleTimeUpdate }
                >
                </video>

                {/* CONTROLS */}
                <div className={ cls.controls }>
                    {/* Navigate Back (Exit Video Player) btn  */}
                    <div className={ cls.btn } onClick={ () => navigate(-1)}>
                        <MdArrowBack/>   
                    </div>
                    {/* Display Time Current / Total */}
                    <div className={ cls.btn + ' ' + cls.timer }> 
                        <span>{ `${playerState.currentTime} / ${playerState.duration}` }</span>
                    </div>
                    {/* REWIND Back 10 s Btn */}
                    <div className={ cls.btn } onClick={ () => seekingTime(-10) }>
                        <MdFastRewind/>   
                    </div>
                    {/* PALY / PAUSE Btn */}
                    <div className={ cls.btn } onClick={ () => togglePlay() }>
                        {(playerState.isPlaying) ? <BsPauseFill/> : <BsPlayFill/>}
                    </div>
                    {/* FAST FORWARD 10s Btn */}
                    <div className={ cls.btn } onClick={ () => seekingTime(10) }>
                        <MdFastForward/>   
                    </div>
                    {/* MUTE/UNMUTE Sound Btn */}
                    <div className={ cls.btn } onClick={ () => toggleMute() }>
                        {(playerState.isMuted) ? <BsVolumeMuteFill/> : <BsVolumeUpFill/>}
                    </div>
                    {/* Enter FULLSCREEN Btn */}
                    <div className={ cls.btn } onClick={() => { toggleFullScreen(videoRef.current) }}>
                        <BsFullscreen/>   
                    </div>
                </div>  
            </div>

        </div>
    )
};

export default PlayerHLS;