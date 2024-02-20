import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/1.jpeg" alt="" />
          <input
            placeholder="Share your today's thought"
            className="shareInput"
          />
        </div>

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" htmlColor="tomato" />
              <span className="shareOptionText">Photo or Video</span>
            </div>

            <div className="shareOption">
              <Label className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions className="shareIcon" htmlColor="goldenrod" />
              <span className="shareOptionText">Feelings</span>
            </div>

            <div className="shareOption">
              <Room className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">Location</span>
            </div>
          </div>
          <button className="shareBtn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
