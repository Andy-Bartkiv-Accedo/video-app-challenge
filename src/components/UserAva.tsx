import userImg from "../static/placeholders/user_img.png";

const UserAva: React.FC = () => {
  return (
    <div className="header-user">
        <p className="user-name">Aladdin</p>
        <img src={userImg} alt="company_logo" />
    </div>)
}

export default UserAva;