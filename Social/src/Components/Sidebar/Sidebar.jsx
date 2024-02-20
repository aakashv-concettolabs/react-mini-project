import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import "./sidebar.css";
import { Users } from "../../dummyData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarListIconItem" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarListIconItem" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarListIconItem" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarListIconItem" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarListIconItem" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarListIconItem" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarListIconItem" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarListIconItem" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarListIconItem" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarBtn">Show More</button>
        <hr className="sidebarHr" />
        <h4 className="sidebarTitle">Friends</h4>
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <li key={user.id} className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src={user.profilePicture}
                alt=""
              />
              <span className="sidebarFriendName">{user.username}</span>
            </li>
          ))}

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/2.jpeg" alt="" />
            <span className="sidebarFriendName">aman</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
