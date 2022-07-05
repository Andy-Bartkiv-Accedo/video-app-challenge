import Logo from "./Logo";
import Navbar from "./Navbar";
import UserAva from "./UserAva";

const Header: React.FC = () => {

    return (
        <div className="App-header">
            <Logo />
            <Navbar />
            <UserAva />
        </div>
    )

}

export default Header;