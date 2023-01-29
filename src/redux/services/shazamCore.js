// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const shazamCoreApi = createApi({
//   reducerPath: 'shazamCoreApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
//     prepareHeaders: (headers) => {
//       headers.set('X-RapidAPI-Key', 'bee497ac55msha49746c58a18d5ep191469jsn5382fde9ce3b')

//       return headers
//     }
//   }),
//   endpoints: (builder) => ({
//     getTopCharts: builder.query({ query: () => '/chats/world' })

//   })
// })

// export const {
//   useGetTopChartsQuery,
// } = shazamCoreApi;


// const options = {
//   method: 'GET',
//   url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
//   params: { query: 'metallica', search_type: 'SONGS_ARTISTS' },
//   headers: {
//     'X-RapidAPI-Key': 'bee497ac55msha49746c58a18d5ep191469jsn5382fde9ce3b',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//   }
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err))

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;