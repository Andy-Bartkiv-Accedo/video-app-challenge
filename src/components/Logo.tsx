import logo from "../static/placeholders/logo-disneyplus-1024_01.png";

const Logo: React.FC = () => {
  return (
    <div className="header-logo">
        <img src={logo} alt="company_logo" />
    </div>)
}

export default Logo