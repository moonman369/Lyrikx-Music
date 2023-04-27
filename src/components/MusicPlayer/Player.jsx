/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef(null);
  // eslint-disable-next-line no-unused-expressions
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <>
      {activeSong?.hub?.actions ? (
        <audio
          src={
            activeSong?.hub?.actions[1]?.uri ||
            activeSong?.attributes?.streaming?.preview
          }
          ref={ref}
          loop={repeat}
          onEnded={onEnded}
          onTimeUpdate={onTimeUpdate}
          onLoadedData={onLoadedData}
        />
      ) : (
        <Link to={activeSong?.url}></Link>
      )}
    </>
  );
};

export default Player;
