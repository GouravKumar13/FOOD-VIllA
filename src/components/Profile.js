import useProfile from "../utils/useProfile";
import "./Profile.scss"
const Profile = () => {
  userdata = useProfile();

  return (
    <div className="wrapper">
      <div className="userInfo">
        <h1>Name: {userdata?.login}</h1>
        <img src={userdata?.avatar_url} />
      </div>
      <h4 className="location">Locataion: {userdata?.location}</h4>
    </div>
  );
};
export default Profile;
