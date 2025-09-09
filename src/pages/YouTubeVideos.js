import React, { useEffect, useState } from "react";
import "../css/YouTubeVideos.css"; // Import CSS

function YouTubeVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const CHANNEL_ID = "UC1fYhjPdb0LmJuGikHn2t9Q"; // your channel ID
  const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div className="youtube-wrapper">
      {/* Background video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/star2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1>My Latest YouTube Videos</h1>

      {loading ? (
        <p className="loading">Loading videos...</p>
      ) : (
        <div className="video-container">
          {videos.map((video, index) => {
            const videoId = video.link.split("v=")[1];
            return (
              <div key={index} className="video">
                {/* Video preview */}
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>

                {/* Title */}
                <h3>{video.title}</h3>

                {/* Subtitle (static placeholder for now) */}

                {/* Description (you can use video.description if available) */}

                {/* Button */}
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-button"
                >
                  Watch the Video →
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default YouTubeVideos;
