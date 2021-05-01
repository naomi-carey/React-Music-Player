import React from "react";
import { FaPlay, FaAngleLeft, FaAngleRight, FaPause } from "react-icons/fa";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
}) => {
  // const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // const timeUpdateHandler = (e) => {
  //   const current = e.target.currentTime;
  //   const duration = e.target.duration;
  //   setSongInfo({ ...songInfo, currentTime: current, duration });
  // };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  // const [songInfo, setSongInfo] = useState({
  //   currentTime: 0,

  //   duration: 0,
  // });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)} </p>

        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FaAngleLeft className="skip-back" size={28} />

        {isPlaying ? (
          <>
            <FaPlay
              onClick={playSongHandler}
              className="play"
              size={28}
              icon={isPlaying ? FaPause : FaPlay}
            />
          </>
        ) : (
          <>
            <FaPause
              onClick={playSongHandler}
              className="play"
              size={28}
              icon={isPlaying ? FaPause : FaPlay}
            />
          </>
        )}

        <FaAngleRight className="skip-forward" size={28} />
      </div>
      {/* <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio> */}
    </div>
  );
};

export default Player;
