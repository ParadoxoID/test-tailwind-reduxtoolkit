import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { githubApi } from './github/github.api';
import { githubReducer } from './github/github.slice';

// const rootReducer = combineReducers({});

export function setupStore() {
  return configureStore({
    reducer: {
      [githubApi.reducerPath]: githubApi.reducer,
      github: githubReducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(githubApi.middleware)
  });
}

export const store = setupStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
