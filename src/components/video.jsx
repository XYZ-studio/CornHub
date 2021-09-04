import React from 'react';

const Video = () => {
  return (
    <div className="video">
      <video height="1280" width="720">
        <source src="{`/video/${file}`}" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
