import { configureStore } from '@reduxjs/toolkit'

import { shazamCoreApi } from './services/shazamCore'

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
})

