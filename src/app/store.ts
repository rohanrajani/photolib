import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../pages/Users/slice';
import userAlbumReducer from '../pages/Albums/slice';
import albumPhotoReducer from '../pages/Photos/slice';
import breadcrumsReducer from '../components/breadcrums/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    userAlbum: userAlbumReducer,
    albumPhoto: albumPhotoReducer,
    breadCrums: breadcrumsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
