import React from "react";
import { Link } from "react-router-dom";

import PlayPause from "./PlayPause";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const SongBar = ({
  song,
  i,
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
}) => {
  const dispatch = useDispatch();

  const handlePlayClick = (song, data, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#158b68be] ${
        activeSong?.title === song?.title ? "bg-[#99999938]" : "bg-transparent"
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={
            artistId
              ? song?.attributes?.artwork?.url
                  .replace("{w}", "125")
                  .replace("{h}", "125")
              : song?.attributes?.images?.coverArt
          }
          alt={song?.attributes?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.id}`}>
            <p className="text-xl font-bold text-white">
              {artistId ? song?.attributes?.name : song?.attributes?.title}
            </p>
          </Link>
          {/* {!artistId ? (
            <Link to={`/songs/${song.id}`}>
              <p className="text-xl font-bold text-white">
                {song?.attributes?.title}
              </p>
            </Link>
          ) : (
            <Link to={`/songs/${song.id}`}>
              <p className="text-xl font-bold text-white">
                {song?.attributes?.name}
              </p>
            </Link>
          )} */}
          <p className="text-base text-gray-300 mt-1">
            {artistId ? song?.attributes?.albumName : song?.attributes?.artist}
          </p>
        </div>
      </div>
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, data, i)}
        />
      ) : null}
    </div>
  );
};

export default SongBar;
