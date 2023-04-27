import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { id: artistId } = useParams();
  console.log(artistId);

  const {
    data: artistData,
    isFetching: isFetchingArtist,
    error,
  } = useGetArtistDetailsQuery(artistId);

  console.log(artistData?.resources?.artists);

  // const isFetchingArtist = false;
  // const error = false;

  if (isFetchingArtist) return <Loader title="Loading artist details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData?.resources} />

      <RelatedSongs
        artistId={artistId}
        data={Object.values(artistData.resources.songs)}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
