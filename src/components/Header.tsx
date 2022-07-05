import Logo from "./Logo";
import Navbar from "./Navbar";
import UserAvatar from "./UserAvatar";

const Header: React.FC = () => {

    return (
        <div className="App-header">
            <Logo />
            <Navbar />
            <UserAvatar />
        </div>
    )

}

export default Header;