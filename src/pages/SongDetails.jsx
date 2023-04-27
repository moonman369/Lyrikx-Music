import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();
  console.log(songid);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = ({ song, data, i }) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const { data, isFetching } = useGetSongDetailsQuery(songid);

  // console.log(data);
  // const isFetching = false;
  // console.log(data);

  const {
    data: relatedData,
    isFetching: isFetchingRelated,
    error,
  } = useGetSongRelatedQuery(songid);
  // console.log(relatedData);

  // const error = null;
  // const isFetchingRelated = false;

  // console.log(Object.values(relatedData?.resources["shazam-songs"]));

  console.log(relatedData?.resources);

  if (isFetching || isFetchingRelated)
    return <Loader title="Fetching song details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={data} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {data?.sections[1].type === "LYRICS" ? (
            data.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, lyrics aren't available for this song
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        artistId={0}
        data={Object.values(relatedData?.resources["shazam-songs"])}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
      />
    </div>
  );
};

export default SongDetails;
