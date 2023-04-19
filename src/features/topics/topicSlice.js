import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducer: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topic[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      };
    }
  }
});

export default topicsSlice.reducer;
