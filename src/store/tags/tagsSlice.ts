import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

// interface NoteState {
//   mainNotes: Note[];
//   archiveNotes: Note[];
//   trashNotes: Note[];
//   editNote: null | Note[];
// }

const initialState = {
  tagsList: [
    { tag: "learnings", id: v4() }, //아이디 지정 또는 랜덤 아이디 생성(crypto)
    { tag: "work", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagsSlice.reducer;
