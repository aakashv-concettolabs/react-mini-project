import { Users } from "../../dummyData";
import "./online.css";


const Online = ({ onlineFriend }) => {
  return (
    <>
      <li className="onlineFriend">
        <div className="onlineFriendProfileContainer">
          <img
            src={onlineFriend.profilePicture}
            alt={onlineFriend.username}
            className="onlineFriendProfile"
          />
          <span className="onlineStatus"></span>
        </div>
        <span className="onlineFriendUsername">{onlineFriend.username}</span>
      </li>
    </>
  );
};

export default Online;
