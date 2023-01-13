import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface BreadeCrumsState {
  home: string;
  user: string | null;
  album: string | null;
}

export interface BreadeCrumsPayload {
  type: string;
  url: string | null;
}

const initialState: BreadeCrumsState = {
  home: "/",
  user: null,
  album: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const crumsSlice = createSlice({
  name: "breadCrums",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateCrums: (state, action: PayloadAction<BreadeCrumsPayload>) => {
      if (action.payload.type === "home") {
        state.user = null;
        state.album = null;
      }
      if (action.payload.type === "user") {
        state.user = action.payload.url;
        state.album = null;
      } else if (action.payload.type === "album") {
        state.album = action.payload.url;
      }
    },
  },
});
export const { updateCrums } = crumsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const breadCrumsData = (state: RootState) => state.breadCrums;

export default crumsSlice.reducer;
