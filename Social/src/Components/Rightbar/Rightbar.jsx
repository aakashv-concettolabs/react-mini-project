import Online from "../Online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";

const Rightbar = () => {
  const activeUsers = Users.filter((user) => user.status);

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Ramesh</b>and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="onlineFriendList">
          {activeUsers.map((user) => (
            <Online key={user.id} onlineFriend={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
