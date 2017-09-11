import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className = "video-detail col-md-8">
        <div className = "col-md-4">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;

// <div className = "embed-responsive embed-responsive-16-by-9">


// <iframe
//   src="http://player.twitch.tv/?channel=blizzheroes&autoplay=false"
//   height="680"
//   width="840"
//   frameborder="0"
//   scrolling="no"
//   allowfullscreen="true">
// </iframe>
