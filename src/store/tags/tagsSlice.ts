import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 } from "uuid";

// interface NoteState {
//   mainNotes: Note[];
//   archiveNotes: Note[];
//   trashNotes: Note[];
//   editNote: null | Note[];
// }

const initialState = {
  tagsList: [
    { tag: "coding", id: v4() }, //아이디 지정 또는 랜덤 아이디 생성(crypto)
    { tag: "exercise", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTags: (state, { payload }) => {
      if (state.tagsList.find(({ tag }) => tag === payload.tag)) {
        toast.warning("already existed tag");
      } else {
        state.tagsList.push(payload); //immer??
        toast.info("new tag registed");
      }
    },
    deleteTags: (state, { payload }) => {
      state.tagsList = state.tagsList.filter(({ id }) => id !== payload);
      toast.info("tag deleted");
    },
  },
});

export const { addTags, deleteTags } = tagsSlice.actions;

export default tagsSlice.reducer;
