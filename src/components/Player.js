import React, { useRef, useState } from "react";
import { FaPlay, FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)} </p>

        <input type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FaAngleLeft className="skip-back" size={28} />
        <FaPlay onClick={playSongHandler} className="play" size={28} />

        <FaAngleRight className="skip-forward" size={28} />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
