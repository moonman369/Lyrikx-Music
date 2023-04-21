import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "d90143e853msh867f4503fecfa23p18f143jsnd9211ae48493",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//   },
// };

// fetch("https://shazam.p.rapidapi.com/charts/track", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "d90143e853msh867f4503fecfa23p18f143jsnd9211ae48493"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (startFrom) => `/charts/track?startFrom=${startFrom}`,
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
