import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hls from 'hls.js';
import cls from './PlayerHLS.module.css';
import useVideoPlayer from '../../../hooks/useVideoPlayer';
import { BsPlayFill, BsPauseFill, BsFullscreen, BsFullscreenExit, BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";
import { MdArrowBack, MdFastRewind, MdFastForward } from "react-icons/md";

interface Props {
    url: string
};

const PlayerHLS: React.FC<Props> = ({ url }) => {

    const navigate = useNavigate();

    const videoRef = useRef<HTMLVideoElement>(null!);
    const videoWrap = useRef<HTMLDivElement>(null);

    const {
        playerState,
        togglePlay,
        handleTimeUpdate,
        seekingTime,
        toggleFullScreen,
        toggleMute
    } = useVideoPlayer(videoRef.current, videoWrap.current);

    // Bound HLS and Video
    const hlsRef = useRef(new Hls());
    useEffect(() => {
        const hls = hlsRef.current;
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            console.log('video and hls.js are now bound together !');
            hls.loadSource(url);
            hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                console.log('manifest loaded, found ' + data.levels.length + ' quality level');
                });
        });
    }, []);

    return (
        <div className={ cls.container }>
            <div className={ cls.video_wrap} ref={ videoWrap }>
                {/* VIDEO Element */}
                <video className={ cls.video } ref={ videoRef }
                    onTimeUpdate={ handleTimeUpdate }>
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
                    {/* PLAY / PAUSE Btn */}
                    <div className={ cls.btn } onClick={ togglePlay }>
                        {(playerState.isPlaying) ? <BsPauseFill/> : <BsPlayFill/>}
                    </div>
                    {/* FAST FORWARD 10s Btn */}
                    <div className={ cls.btn } onClick={ () => seekingTime(10) }>
                        <MdFastForward/>   
                    </div>
                    {/* MUTE/UNMUTE Sound Btn */}
                    <div className={ cls.btn } onClick={ toggleMute }>
                        {(playerState.isMuted) ? <BsVolumeMuteFill/> : <BsVolumeUpFill/>}
                    </div>
                    {/* Enter/Exit FULLSCREEN Btn */}
                    <div className={ cls.btn } onClick={ toggleFullScreen }>
                        {(playerState.isFullScreen) ? <BsFullscreenExit/> : <BsFullscreen/>}
                    </div>
                </div>  
            </div>

        </div>
    )
};

export default PlayerHLS;