import React, { useState, useEffect } from "react";
import VideoThumbnail from "./VideoThumbnail";
import "./VideoList.css";
import VideoPlayer from "./VideoPlayer";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);
  const [selectedVideo, setVideo] = useState(null);

  const selectVideo = (video) => {
    setVideo(video);
  };

  const increasePage = () => {
    if (page < 5) setPage(page + 1);
  };

  const decreasePage = () => {
    if (page >= 1) setPage(page - 1);
  };

  useEffect(() => {
    // Fetch videos from the API
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://internship-service.onrender.com/videos?page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data.data.posts); // Access the "posts" property to get the array of videos
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      }
    };

    fetchVideos();
  }, [page]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="videoList">
      <div className="videoPlayer">
        {selectedVideo && (
          <VideoPlayer selectedVideo={selectedVideo} video={selectedVideo} />
        )}
      </div>
      <div className="videoList-container box">
        {videos.map((video) => (
          <VideoThumbnail
            key={video.postId}
            video={video}
            selectVideo={selectVideo}
          />
        ))}
      </div>
      <div>
        <button onClick={decreasePage} id="prev-button" className="button">
          Prev
        </button>
        <button onClick={increasePage} id="next-button" className="button">
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoList;
