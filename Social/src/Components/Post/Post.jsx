import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((user) => user.id === post?.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post?.userId)[0].username}
            </span>
            <span className="postTime">
              <sub>{post.date}</sub>
            </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" />
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCount">{post.like} people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
