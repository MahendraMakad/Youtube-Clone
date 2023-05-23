import React from "react";
import "./VideoThumbnail.css";
import { useState } from "react";

const VideoThumbnail = ({ video, selectVideo }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!playing) {
      selectVideo(null);
      selectVideo(video);
    } else {
      selectVideo(null);
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <div className="box">
        <div className="videoThumbnail">
          <img
            onClick={handlePlay}
            src={video.submission.thumbnail}
            alt={video.title}
          />
        </div>
        <div className="profile">
          <img id="profile-picture" className="id" src={video.creator.pic} />
          <span id="handle-name">{video.creator.handle}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
