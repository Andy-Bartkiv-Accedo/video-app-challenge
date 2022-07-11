import PlayerHLS from '../components/UI/playerHLS/PlayerHLS';

const url = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

interface Props {
    
};

const Player: React.FC<Props> = () => {

    return (

        <PlayerHLS url = { url } />

    )
};

export default Player;