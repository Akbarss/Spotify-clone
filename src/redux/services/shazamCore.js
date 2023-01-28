import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const options = {
  method: 'GET',
  // url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
  // params: { query: 'metallica', search_type: 'SONGS_ARTISTS' },
  headers: {
    'X-RapidAPI-Key': 'bee497ac55msha49746c58a18d5ep191469jsn5382fde9ce3b',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.log(err))


export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi'
})