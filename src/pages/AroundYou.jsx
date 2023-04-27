import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Error } from "../components";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  console.log(country);

  useEffect(() => {
    // at_UtiCVbWclQUewqvJEvYT5uvBR2Bbl

    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_UtiCVbWclQUewqvJEvYT5uvBR2Bbl`
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [country]);

  return <div>CountryTracks</div>;
};

export default AroundYou;
