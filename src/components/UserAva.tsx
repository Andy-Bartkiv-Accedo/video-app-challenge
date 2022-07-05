import userImg from "../static/placeholders/user_img.png";

const UserAva = () => {
  return (
    <div className="header-user">
        <div className="user-name">Aladdin</div>
        <img src={userImg} alt="company_logo" />
    </div>)
}

export default UserAva;