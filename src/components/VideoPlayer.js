import "./VideoPlayer.css";

function VideoPlayer({ video }) {
  return (
    <div className="videoPlayer">
      <div className="videoSpace">
        <video
          src={video.submission.mediaUrl}
          width="300"
          height="530"
          controls
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
