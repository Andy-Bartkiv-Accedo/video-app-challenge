import Logo from "./Logo";
import Navbar from "./Navbar";
import UserAva from "./UserAva";

const Header = () => {

    return (
        <div className="App-header">
            <Logo />
            <Navbar />
            <UserAva />
        </div>
    )

}

export default Header;