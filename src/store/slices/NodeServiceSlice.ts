import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { NodeServiceType } from "../../types";

const initialState: NodeServiceType[] = [];

export const counterSlice = createSlice({
  name: "nodeService",
  initialState,
  reducers: {
    initState: (state, action: PayloadAction<NodeServiceType[]>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initState } = counterSlice.actions;

export default counterSlice.reducer;
