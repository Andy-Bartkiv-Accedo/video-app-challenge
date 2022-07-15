import { useState, useEffect } from "react";

const convertTime = (time:number):string =>
    new Date(1000 * time).toISOString().substr(14, 5) 

interface PlayerState {
    isPlaying: boolean,
    isFullScreen: boolean,
    isMuted: boolean,
    currentTime: string,
    duration: string
}

const useVideoPlayer = (
    videoElement: HTMLVideoElement | null, 
    videoContainer:HTMLDivElement | null
    ) => {

    const [playerState, setPlayerState] = useState<PlayerState>({
        isPlaying: false,
        isFullScreen: false,
        isMuted: false,
        currentTime: '00:00',
        duration: '00:00',
    });

    // Toggle Play/Pause 
    const togglePlay = () => {
        setPlayerState({...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };
    useEffect(() => {
        (videoElement?.paused)
            ? videoElement?.play()
            : videoElement?.pause();
    }, [videoElement, playerState.isPlaying])
    
    // Toggle Sound Mute
    const toggleMute = () => {
        if (videoElement) {
            (videoElement.muted)
                ? videoElement.muted = false
                : videoElement.muted = true;
            setPlayerState({...playerState,
                isMuted: !playerState.isMuted,
            });
        }
    };
    // Rewind or Fast Forward Current Time by 10s
    const seekingTime = (dTime:number = 10) => {
        if (videoElement)
            videoElement.currentTime += dTime;
    }
    // Update Time Current/Total 
    const handleTimeUpdate = () => {
        if (videoElement)
            setPlayerState({...playerState,
                currentTime: convertTime(videoElement.currentTime),
                duration: convertTime(videoElement.duration)
            });
    }
    // Toggle FullScreen Mode
    const toggleFullScreen = () => {
        if (document.fullscreenElement)
            document.exitFullscreen();
        else if (videoContainer && videoContainer.requestFullscreen)
            videoContainer.requestFullscreen();
        setPlayerState({...playerState,
            isFullScreen: !playerState.isFullScreen
        });
    }

    return {
        playerState,
        togglePlay,
        handleTimeUpdate,
        seekingTime,
        toggleFullScreen,
        toggleMute
    };
}

export default useVideoPlayer;