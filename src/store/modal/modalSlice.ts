import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  viewEditTagsModal: boolean;
  viewAddTagsModal: boolean;
  viewCreateTagsModal: boolean;
  viewFilterTagsModal: boolean;
}

const initialState: ModalState = {
  viewEditTagsModal: false,
  viewAddTagsModal: false,
  viewCreateTagsModal: false,
  viewFilterTagsModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
});

export default modalSlice.reducer;
