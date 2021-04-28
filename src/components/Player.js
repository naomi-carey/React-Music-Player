import React from "react";
import { FaPlay, FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>

        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FaAngleLeft className="skip-back" size={28} />
        <FaPlay className="play" size={28} />

        <FaAngleRight className="skip-forward" size={28} />
      </div>
    </div>
  );
};

export default Player;
