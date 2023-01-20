import { useState, useEffect, useCallback } from "react";

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
    const togglePlay = useCallback(() => {
        setPlayerState({...playerState,
            isPlaying: !playerState.isPlaying,
        });
        (videoElement?.paused)
            ? videoElement?.play()
            : videoElement?.pause();
    }, [videoElement?.paused ]);
    // useEffect(() => {
    //     (playerState.isPlaying)
    //         ? videoElement?.play()
    //         : videoElement?.pause();
    // }, [videoElement, playerState.isPlaying]);
    
    // Toggle Sound Mute
    const toggleMute = useCallback(() => {
        if (videoElement) {
            (videoElement.muted)
                ? videoElement.muted = false
                : videoElement.muted = true;
            setPlayerState({...playerState,
                isMuted: !playerState.isMuted,
            });
        }
    }, [videoElement?.muted]);
    // Rewind or Fast Forward Current Time by 10s
    const seekingTime = useCallback(( dTime:number = 10) => {
        console.log(videoElement?.currentTime);
        if (videoElement)
            videoElement.currentTime += dTime;
        console.log('after', videoElement?.currentTime);
    }, [videoElement?.currentTime])
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