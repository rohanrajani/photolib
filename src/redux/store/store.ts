import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../slice/UserSlice';
import userAlbumReducer from '../slice/AlbumSlice';
import albumPhotoReducer from '../slice/PhotoSlice';
import breadcrumsReducer from '../slice/BreadCrumbsSlice';

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
