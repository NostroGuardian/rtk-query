import { configureStore } from '@reduxjs/toolkit';

import { usersApi } from '@/pages/Home';

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
