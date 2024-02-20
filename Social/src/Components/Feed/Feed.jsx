import Post from "../Post/Post";
import Share from "../Share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((feedpost) => (
          <Post key={feedpost.id} post={feedpost} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
