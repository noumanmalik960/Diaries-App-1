import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user.interface";

const user = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    // this function gets user object in payload, when no data is passed we set the user property to null that's why its like `<User | null>`
    setUser(state, { payload }: PayloadAction<User | null>) {
      return (state = payload) != null ? payload : null;
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
